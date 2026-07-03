# Contact form → Google Sheets setup

Every contact / demo form on the site (all pages) posts to `/api/contact`, which
forwards the submission to a Google Sheet. One row is appended per submission,
and each row records which page it came from. Follow these steps once.

## 1. Create the Google Sheet

1. Go to https://sheets.google.com and create a new blank spreadsheet.
2. (Optional) Rename the first tab to `Submissions`.

## 2. Add the Apps Script

1. In the sheet: **Extensions → Apps Script**.
2. Delete any starter code and paste this:

```javascript
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Submissions') || ss.getSheets()[0];

    // Add a header row the first time.
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp', 'Source Page', 'First Name', 'Last Name',
        'Business Email', 'Company', 'Job Title', 'Country', 'Message'
      ]);
    }

    var d = JSON.parse(e.postData.contents);
    sheet.appendRow([
      new Date(),
      d.source || '',
      d.firstName || '',
      d.lastName || '',
      d.email || '',
      d.company || '',
      d.jobTitle || '',
      d.country || '',
      d.message || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
```

3. Click **Save**.

## 3. Deploy as a Web App

1. Click **Deploy → New deployment**.
2. Gear icon → **Web app**.
3. Set:
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy**, authorize when prompted (accept the "unverified app" warning
   for your own script).
5. Copy the **Web app URL** — it ends in `/exec`.

## 4. Wire the URL into the site

1. Open `.env.local` in the project root.
2. Paste the URL:

   ```
   SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/XXXXXXXX/exec
   ```

3. Restart the dev server (`npm run dev`) so the new env var is picked up.

For production hosting (e.g. Vercel), add the same `SHEETS_WEBHOOK_URL`
environment variable in the host's project settings.

## 5. Test

Fill in any page's form and submit. You should see a "Thank you!" message, and a
new row should appear in the Google Sheet within a second or two.

## Export to Excel

In the Google Sheet: **File → Download → Microsoft Excel (.xlsx)**.

## Notes / troubleshooting

- If you edit the Apps Script later, **redeploy** (Deploy → Manage deployments →
  edit → New version) or create a new deployment and update the URL.
- The webhook URL lives only in `.env.local` (gitignored) and is used
  server-side, so it never ships in the browser bundle.
- Column order is fixed by the Apps Script `appendRow(...)` above — change it
  there if you want a different layout.
