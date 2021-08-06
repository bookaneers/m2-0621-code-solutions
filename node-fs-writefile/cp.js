
const fs = require('fs');

var fileToRead = process.argv[2];
var fileToWrite = process.argv[3];

fs.readFile(fileToRead, 'utf8', (err, data) => {
  if (err) throw err;
  // console.log(data);
  fs.writeFile(fileToWrite, data, 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }
  });
});
