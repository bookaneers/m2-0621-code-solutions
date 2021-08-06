var fileToRead = process.argv[2];
var fs = require('fs');

fs.readFile(fileToRead, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
