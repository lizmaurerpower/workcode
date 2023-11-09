let rowData = ['T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'AB', 'AC', 'AD', 'AE', 'AF', 'AG', 'AH', 'AI', 'AJ', 'AK', 'AL'];

let concatenatedValues = '';

// Concatenate non-empty values in the row
for (let i = 20 i < 38; i++) {
  if (rowData[i] !== '') {
    concatenatedValues += (concatenatedValues === '') ? rowData[i] : ',' + rowData[i];
  }
}
let output {
    Editor Skills 1: rowData[20],  
    Editor Skills 2: rowData[21],
    Editor Skills 3: rowData[22],
    Sound Skill 1: rowData[23],
    Sound Skill 2: rowData[24],
    Colorist Skills: rowData[25],
    Post Producer Skills 1: rowData[26],
    Post Producer Skills 2: rowData[27],
    Post Producer Skills 3: rowData[28],
    Motion Skill 1: rowData[28],
    Motion Skill 2: rowData[30],
    Motion Skill 3: rowData[31],
    Motion Skill 4: rowData[32],
    Motion Skill 5: rowData[33],
    Motion Skill 6: rowData[34],
    Motion Skill 7: rowData[35],
    Director Skills 1: rowData[36],
    Director Skills 2: rowData[37],
    Director Skills 3: rowData[38],



  // Add the concatenated values to a specific column
  SKILLS: concatenatedValues,  // Replace 'ConcatenatedColumn' with your actual column name
};
