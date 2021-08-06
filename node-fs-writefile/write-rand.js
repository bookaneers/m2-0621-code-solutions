
const fs = require('fs');
var randomNumber = Math.random().toString();

fs.writeFile('random.txt', randomNumber, 'utf8', function (err) {
  if (err) {
    return console.log(err);
  }
});
