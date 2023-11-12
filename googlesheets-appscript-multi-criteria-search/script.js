function searchAndCopyToNewTab() {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sourceSheetName = '📇 Rolodex';
    var targetSheetName = 'TEST COPY 👁️‍🗨️ Search';
  
    var sourceSheet = spreadsheet.getSheetByName(sourceSheetName);
    var targetSheet = spreadsheet.getSheetByName(targetSheetName);
  
    if (!sourceSheet || !targetSheet) {
      Logger.log("Source or target sheet not found");
      return;
    }
  
    // Retrieve search value from the list dropdown in I5 on the target sheet
    var criteriaValue = targetSheet.getRange('I5').getValue();
    Logger.log("Criteria Value: " + criteriaValue);
  
    if (!criteriaValue) {
      Logger.log("No criteria selected in I5");
      return;
    }
  
    var dataRange = sourceSheet.getRange('AR1:BJ1000');
    var data = dataRange.getValues();
  
    var matchingRows = [];
  
    // Loop through all cells in the specified range
    for (var i = 0; i < data.length; i++) {
      var row = data[i];
      for (var j = 0; j < row.length; j++) {
        if (row[j] === criteriaValue) {
          Logger.log("Match found at Row " + (i + 1) + ", Column " + String.fromCharCode(j + 44)); // Convert column index to letter
          matchingRows.push(data[i]);
          break; // Break out of the inner loop once a match is found in the current row
        }
      }
    }
  
    if (matchingRows.length > 0) {
      // Clear existing data in target sheet (assuming headers are present)
      targetSheet.clearContents();
  
      // Retrieve matching rows to the target sheet starting from specified cell (e.g., A15)
      targetSheet.getRange('A15').offset(0, 0, matchingRows.length, matchingRows[0].length).setValues(matchingRows);
      Logger.log("Setting Values to Range: " + targetSheet.getRange('A15').offset(0, 0, matchingRows.length, matchingRows[0].length).getA1Notation());
  
      Logger.log("Matching rows copied to " + targetSheetName);
    } else {
      Logger.log("No matching rows found.");
    }
  }

  