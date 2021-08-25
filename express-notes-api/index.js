const express = require('express');
const app = express();
const jsonMiddleware = express.json();

app.use(jsonMiddleware);

// GET a list of notes =====
app.get('/api/notes', (req, res) => {
  var fs = require('fs');
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const arrayOfData = [];
    const database = JSON.parse(data);
    for (var key in database.notes) {
      arrayOfData.push(database.notes[key]);
    }
    res.status(200).send(arrayOfData);
  });
});
// =====

// GET a single note =====
app.get('/api/notes/:id', (req, res) => {
  const idNumber = Number(req.params.id);
  if (!Number.isInteger(idNumber) || idNumber <=0) {
    return res.status(400).json({ error: 'id must be a positive integer' });
  }
  var fs = require('fs');
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const arrayOfData = [];
    const database = JSON.parse(data);
    for (var key in database.notes) {
      arrayOfData.push(database.notes[key]);
    }
    for (var i = 0; i < arrayOfData.length; i++) {
      if (String(arrayOfData[i].id) === req.params.id) {
        return res.status(200).send(arrayOfData[i]);
      }
    }
    return res.status(400).json({ error: `cannot find note with id ${idNumber}` });
  });
});
// =====
// POST a new note =====
app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  const id = nextId++;
  newNote.id = id;
  notes[id] = newNote;
  return res.status(201).json(newNote);
});
// =====

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
