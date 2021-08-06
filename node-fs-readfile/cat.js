
var fs = require('fs');

var filesToRead = process.argv;
var lengthOfArgv = process.argv.length


// console.log(fileToRead);

for (var i = 2; i < lengthOfArgv; i++) {
  fs.readFile(filesToRead[i], 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}
