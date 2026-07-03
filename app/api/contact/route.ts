/**
 * POST /api/contact — receives a contact/demo form submission and, in parallel:
 *   1. Emails it to CONTACT_TO_EMAIL via Resend (transactional email).
 *   2. Appends one row to a Google Sheet via an Apps Script Web App webhook.
 *
 * All secrets live server-side (env) so they never ship in the client bundle,
 * and forwarding server-to-server avoids browser CORS issues.
 *
 * Required env (.env.local):
 *   SHEETS_WEBHOOK_URL  Apps Script /exec URL (Deploy → Web app → Access: Anyone)
 *   RESEND_API_KEY      Resend API key (re_…)
 *   CONTACT_TO_EMAIL    recipient inbox for submissions
 *   CONTACT_FROM_EMAIL  sender (onboarding@resend.dev until a domain is verified)
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Fields we persist, in column order. */
const FIELDS = ["firstName", "lastName", "email", "country", "phone", "company", "message"] as const;

const LABELS: Record<(typeof FIELDS)[number], string> = {
  firstName: "First name",
  lastName: "Last name",
  email: "Business email",
  country: "Country",
  phone: "Contact number",
  company: "Company",
  message: "How can we help?",
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Send the submission as an email via Resend. Resolves false on any failure. */
async function sendEmail(payload: Record<string, string>): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
  if (!key || !to) return false;

  const rows = FIELDS.filter((f) => payload[f])
    .map(
      (f) =>
        `<tr><td style="padding:6px 12px;color:#767676;font:14px sans-serif;vertical-align:top">${LABELS[f]}</td>` +
        `<td style="padding:6px 12px;color:#1e2124;font:14px sans-serif">${escapeHtml(payload[f])}</td></tr>`,
    )
    .join("");

  const html =
    `<div style="font-family:sans-serif;color:#1e2124"><h2 style="font-weight:600">New contact form submission</h2>` +
    `<table style="border-collapse:collapse">${rows}</table></div>`;

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 10_000);
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: `Jicate Website <${from}>`,
        to: [to],
        reply_to: payload.email || undefined,
        subject: `New enquiry from ${payload.firstName} ${payload.lastName}`.trim() + ` — ${payload.source || "site"}`,
        html,
      }),
      signal: controller.signal,
    });
    clearTimeout(timer);
    return res.ok;
  } catch {
    return false;
  }
}

/** Append the submission to the Google Sheet via the Apps Script webhook. */
async function appendSheet(payload: Record<string, string>): Promise<boolean> {
  const webhook = process.env.SHEETS_WEBHOOK_URL;
  if (!webhook) return false;
  try {
    const controller = new AbortController();
    // Apps Script /exec can be slow on a cold start — allow extra headroom.
    const timer = setTimeout(() => controller.abort(), 15_000);
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
      redirect: "follow", // Apps Script /exec 302s to googleusercontent
    });
    clearTimeout(timer);
    return res.ok;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  // Minimal required-field guard (mirrors the required inputs on the form).
  if (!body.email || !body.firstName) {
    return Response.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  // Whitelist + stringify only the fields we store.
  const payload: Record<string, string> = {};
  for (const key of FIELDS) {
    const v = body[key];
    payload[key] = v == null ? "" : String(v);
  }

  // Fire both destinations; a failure in one must not lose the other.
  const [emailOk, sheetOk] = await Promise.all([sendEmail(payload), appendSheet(payload)]);

  if (!emailOk && !sheetOk) {
    return Response.json(
      { ok: false, error: "Could not deliver your message. Please try again later." },
      { status: 502 },
    );
  }

  // Succeed if at least one destination accepted it; surface partial failure.
  return Response.json({ ok: true, emailOk, sheetOk });
}
