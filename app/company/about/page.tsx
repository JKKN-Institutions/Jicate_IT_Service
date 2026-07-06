import { redirect } from "next/navigation";

/**
 * Legacy/alternate About URL. The canonical About page lives at `/about`; some
 * nav entries and external links historically pointed at `/company/about`, so
 * this route permanently forwards there instead of 404-ing.
 */
export default function CompanyAboutPage() {
  redirect("/about");
}
