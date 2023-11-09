const column18 = (typeof inputData['Editor Skills 1'] !== 'undefined' && inputData['Editor Skills 1'] !== '') ? inputData['Editor Skills 1'] : undefined;
const column19 = (typeof inputData['Editor Skills 2'] !== 'undefined' && inputData['Editor Skills 2'] !== '') ? inputData['Editor Skills 2'] : undefined;
const column20 = (typeof inputData['Editor Skills 3'] !== 'undefined' && inputData['Editor Skills 3'] !== '') ? inputData['Editor Skills 3'] : undefined;
const column21 = (typeof inputData['Sound Skill 1'] !== 'undefined' && inputData['Sound Skill 1'] !== '') ? inputData['Sound Skill 1'] : undefined;
const column22 = (typeof inputData['Sound Skill 2'] !== 'undefined' && inputData['Sound Skill 2'] !== '') ? inputData['Sound Skill 2'] : undefined;
const column23 = (typeof inputData['Colorist Skills'] !== 'undefined' && inputData['Colorist Skills'] !== '') ? inputData['Colorist Skills'] : undefined;
const column24 = (typeof inputData['Post Producer Skills 1'] !== 'undefined' && inputData['Post Producer Skills 1'] !== '') ? inputData['Post Producer Skills 1'] : undefined;
const column25 = (typeof inputData['Post Producer Skills 2'] !== 'undefined' && inputData['Post Producer Skills 2'] !== '') ? inputData['Post Producer Skills 2'] : undefined;
const column26 = (typeof inputData['Post Producer Skills 3'] !== 'undefined' && inputData['Post Producer Skills 3'] !== '') ? inputData['Post Producer Skills 3'] : undefined;
const column27 = (typeof inputData['Motion Skill 1'] !== 'undefined' && inputData['Motion Skill 1'] !== '') ? inputData['Motion Skill 1'] : undefined;
const column28 = (typeof inputData['Motion Skill 2'] !== 'undefined' && inputData['Motion Skill 2'] !== '') ? inputData['Motion Skill 2'] : undefined;
const column29 = (typeof inputData['Motion Skill 3'] !== 'undefined' && inputData['Motion Skill 3'] !== '') ? inputData['Motion Skill 3'] : undefined;
const column30 = (typeof inputData['Motion Skill 4'] !== 'undefined' && inputData['Motion Skill 4'] !== '') ? inputData['Motion Skill 4'] : undefined;
const column31 = (typeof inputData['Motion Skill 5'] !== 'undefined' && inputData['Motion Skill 5'] !== '') ? inputData['Motion Skill 5'] : undefined;
const column32 = (typeof inputData['Motion Skill 6'] !== 'undefined' && inputData['Motion Skill 6'] !== '') ? inputData['Motion Skill 6'] : undefined;
const column33 = (typeof inputData['Motion Skill 7'] !== 'undefined' && inputData['Motion Skill 7'] !== '') ? inputData['Motion Skill 7'] : undefined;
const column34 = (typeof inputData['Director Skills 1'] !== 'undefined' && inputData['Director Skills 1'] !== '') ? inputData['Director Skills 1'] : undefined;
const column35 = (typeof inputData['Director Skills 2'] !== 'undefined' && inputData['Director Skills 2'] !== '') ? inputData['Director Skills 2'] : undefined;
const column36 = (typeof inputData['Director Skills 3'] !== 'undefined' && inputData['Director Skills 3'] !== '') ? inputData['Director Skills 3'] : undefined;

let rowData = [column18, column19, column20, column21, column22, column23, column24, column25, column26, column27, column28, column29, column30, column31, column32, column33, column34, column35, column36];

const concatenatedValues = rowData.filter(value => value !== undefined && value !== '').join(', ');

return {
  "Editor Skills 1": column18,  
  "Editor Skills 2": column19,
  "Editor Skills 3": column20,
  "Sound Skill 1": column21,
  "Sound Skill 2": column22,
  "Colorist Skills": column23,
  "Post Producer Skills 1": column24,
  "Post Producer Skills 2": column25,
  "Post Producer Skills 3": column26,
  "Motion Skill 1": column27,
  "Motion Skill 2": column28,
  "Motion Skill 3": column29,
  "Motion Skill 4": column30,
  "Motion Skill 5": column31,
  "Motion Skill 6": column32,
  "Motion Skill 7": column33,
  "Director Skills 1": column34,
  "Director Skills 2": column35,
  "Director Skills 3": column36,
  "SKILLS": concatenatedValues || null
};