var express = require('express');
var app = express();

// GET a list of notes =====
var fs = require('fs');
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) throw err;
  app.get('/api/notes', (req, res) => {
    const database = JSON.parse(data);
    arrayOfData = [];
    for (var key in database.notes) {
      arrayOfData.push(database.notes[key]);
    }
    res.status(200).send(arrayOfData);
  });
});
// =====

// GET a single note =====
var fs = require('fs');
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) throw err;
  app.get('/api/notes/:id', (req, res) => {
    const database = JSON.parse(data);
    arrayOfData = [];
    for (var key in database.notes) {
      arrayOfData.push(database.notes[key]);
    }

    for (var i = 0; i < arrayOfData.length; i++) {
      if (arrayOfData[i].id === req.params.id) {
        res.status(200).send(arrayOfData[i]);
      }
    }
    res.status(200).send(arrayOfData[1].id);
  });
});
// =====

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
