/**
 * GOOGLE APPS SCRIPT FOR CAFÉ MM RESERVATION SHEET
 * Link: https://docs.google.com/spreadsheets/d/1RZ4XuKG9whQLebLfsr8s4oFwiVdex0_-g2-6nWV1MsU/edit
 *
 * How to setup:
 * 1. Open your Google Sheet (https://docs.google.com/spreadsheets/d/1RZ4XuKG9whQLebLfsr8s4oFwiVdex0_-g2-6nWV1MsU/edit)
 * 2. Click "Extensions" -> "Apps Script" in upper menu.
 * 3. Delete any default code in Code.gs and paste this entire code.
 * 4. Save (click the disk icon).
 * 5. Click "Deploy" -> "New deployment" in upper right.
 * 6. Select "Web app" (click gear icon next to "Select type").
 * 7. Set configuration:
 *    - Description: "Cafe MM Reservation API"
 *    - Execute as: "Me (your-email@gmail.com)"
 *    - Who has access: "Anyone"   <-- VERY IMPORTANT to allow reservations to be saved online!
 * 8. Click "Deploy". Authorize permissions if Google asks.
 * 9. Copy the "Web app URL" (looks like https://script.google.com/macros/s/XXXXXX/exec)
 * 10. Paste this URL in the web-application settings or .env file as Web App URL.
 */

function doGet(e) {
  return HtmlService.createHtmlOutput("Café MM Reservation Web App is active! Please use POST requests to save reservations.");
}

function doPost(e) {
  try {
    // Enable CORS to allow calls from the browser
    var headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400"
    };

    if (!e || !e.postData || !e.postData.contents) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        message: "No data received"
      })).setMimeType(ContentService.MimeType.JSON);
    }

    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.openById("1RZ4XuKG9whQLebLfsr8s4oFwiVdex0_-g2-6nWV1MsU").getActiveSheet();

    // If first row doesn't have headers, append them
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["ID الحجز / ID", "الاسم الكامل / Nom", "رقم الهاتف / Téléphone", "تاريخ الحجز / Date", "توقيت الحجز / Heure", "عدد الأشخاص / Personnes", "ملاحظات إضافية / Notes", "حالة الحجز / Statut", "تاريخ الإرسال / Soumis à"]);
    }

    var id = data.id || ("MM-" + Math.floor(1000 + Math.random() * 9000));
    var name = data.name || "";
    var phone = data.phone || "";
    var date = data.date || "";
    var time = data.time || "";
    var guests = data.guests || 1;
    var notes = data.notes || "";
    var status = data.status || "pending";
    var createdAt = data.createdAt || new Date().toLocaleString();

    // Append reservation row to sheet
    sheet.appendRow([id, name, phone, date, time, guests, notes, status, createdAt]);

    var result = {
      status: "success",
      id: id,
      message: "Reservation added successfully"
    };

    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON)
      .setHeaders({ "Access-Control-Allow-Origin": "*" });
  }
}

// Handle OPTIONS (Preflight) requests for CORS
function doOptions(e) {
  var headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400"
  };
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders(headers);
}
