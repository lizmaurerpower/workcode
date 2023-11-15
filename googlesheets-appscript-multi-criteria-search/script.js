// This function will be triggered whenever there is an edit in the spreadsheet
function onEdit(e) {
  var range = e.range;
  var sheetName = range.getSheet().getName();
  var cellValue = range.getValue();

  // Check if the edited cell is in the correct sheet and cell
  if (sheetName === 'Copy of 👁️‍🗨️ Search' && range.getA1Notation() === 'I5') {
    // Run the searchAndRetrieve function with the new search criteria
    searchAndRetrieve(cellValue);
  }
}
// This is the main function for searching and retrieving rows
function searchAndRetrieve(searchCriteria)

function searchAndRetrieve() {
  // Get the active spreadsheet
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  
  // Set the target sheet
  var targetSheet = spreadsheet.getSheetByName('Copy of 👁️‍🗨️ Search');
  
  // Get the search criteria from cell I5 (initial search cell)
  var searchCriteria = targetSheet.getRange('I5').getValue();
  
  // Set the separate sheet
  var separateSheet = spreadsheet.getSheetByName('📇 Rolodex');
  
  // Get the data range from column AR in the rolodex sheet (target)
  var dataRange = separateSheet.getRange('BA:BA');
  
  // Get the values in the data range
  var values = dataRange.getValues();
  
  // Initialize an array to store matching rows
  var matchingRows = [];
  
  // Loop through the values to find all matches
  for (var i = 0; i < values.length; i++) {
    if (values[i][0] == searchCriteria) {
      // If a match is found, retrieve the entire row
      var targetRow = separateSheet.getRange(i + 1, 1, 1, separateSheet.getLastColumn()).getValues();
      
      // Add the matching row to the array
      matchingRows.push(targetRow[0]);
    }
  }
  
  // Check if any matching rows were found
  if (matchingRows.length > 0) {
    // Set the values in the target sheet starting from cell A15
    targetSheet.getRange(15, 1, matchingRows.length, matchingRows[0].length).setValues(matchingRows);
  } else {
    // If no matching rows were found, clear the target range
    targetSheet.getRange(15, 1, targetSheet.getLastRow() - 14, targetSheet.getLastColumn()).clearContent();
  }
}
