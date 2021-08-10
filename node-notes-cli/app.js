const fs = require('fs');
const jsonFile = require('./data.json');

if (process.argv[2] === 'read') {
  for (const key in jsonFile.notes){
    console.log(`${key}: ${jsonFile.notes[key]}`)
  }
} else if (process.argv[2] === 'create') {
  var lastKey;
  if (Object.keys(jsonFile.notes).length === 0) {
    lastKey = 0;
  } else {
    for (const key in jsonFile.notes) {
      lastKey = Number(key);
    }
  }
  lastKey++;
  jsonFile.notes[lastKey] = process.argv[3];
  var jsonFileToWrite = JSON.stringify(jsonFile, null, 2);
  fs.writeFile('./data.json', jsonFileToWrite, 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }
  });
} else if (process.argv[2] === 'update') {
  jsonFile.notes[process.argv[3]] = process.argv[4];
  var jsonFileToWrite = JSON.stringify(jsonFile, null, 2);
  fs.writeFile('./data.json', jsonFileToWrite, 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }
  });

} else if (process.argv[2] === 'delete') {
  delete jsonFile.notes[process.argv[3]];
  var jsonFileToWrite = JSON.stringify(jsonFile, null, 2);
  fs.writeFile('./data.json', jsonFileToWrite, 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }
  });
}





  // console.log(jsonFile);
// console.log(JSON.stringify(jsonFile, null, 2))
