
const fs = require('fs');
var userInput = process.argv[2];

fs.writeFile('note.txt', userInput, 'utf8', function (err) {
  if (err) {
    return console.log(err);
  }
});
