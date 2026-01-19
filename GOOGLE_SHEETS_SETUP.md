# Google Sheets Integration Setup

This guide will help you set up Google Sheets to collect waitlist form submissions.

## Your Google Sheet

Your sheet is already set up at: https://docs.google.com/spreadsheets/d/1xd3PKLDaasw2n6hTvNLN2dXwgXzgGzPXXcZcNQ4rLzo/edit

The sheet has the following columns:
- Column A: `Timestamp`
- Column B: `Email`
- Column C: `Use Case`
- Column D: `Beta Tester`

## Step 1: Create Google Apps Script

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1xd3PKLDaasw2n6hTvNLN2dXwgXzgGzPXXcZcNQ4rLzo/edit
2. Go to **Extensions** → **Apps Script**
3. Delete any default code and paste this script:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Log for debugging (check Executions tab in Apps Script)
    console.log("Received data:", data);
    
    // Match the sheet column order: Timestamp, Email, Use Case, Beta Tester
    // Ensure usage is a string and not empty
    const useCase = data.usage || 'Not specified';
    
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.email || '',
      useCase,
      data.betaTester ? 'Yes' : 'No'
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error("Error:", error);
    return ContentService.createTextOutput(JSON.stringify({ 
      success: false, 
      error: error.toString() 
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (💾) and give your project a name (e.g., "Waitlist Handler")
5. Click **Deploy** → **New deployment**
6. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
7. Set the following:
   - **Description**: "Waitlist Form Handler"
   - **Execute as**: Me
   - **Who has access**: Anyone
8. Click **Deploy**
9. Copy the **Web App URL** (you'll need this in the next step)

## Step 2: Configure Environment Variable

1. Create a `.env` file in the root of your project (if it doesn't exist)
2. Add your Google Apps Script URL:

```
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Replace `YOUR_SCRIPT_ID` with the actual ID from your Web App URL.

3. Restart your development server for the changes to take effect

## Step 3: Test

1. Fill out the waitlist form on your site
2. Submit it
3. Check your Google Sheet - you should see a new row with the submission data

## Notes

- The script uses `no-cors` mode, so errors won't be visible in the browser console
- Submissions will still show as successful even if the script fails (graceful degradation)
- Make sure your Google Sheet has the correct headers in the first row
- The script will append new rows automatically
