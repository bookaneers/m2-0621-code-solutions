const express = require('express');
const app = express();

app.use(express.json()); // middleware


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
// ENF of GET a list of notes =====

// GET a single note =====
app.get('/api/notes/:id', (req, res) => {

  const idNumber = Number(req.params.id);
  if (!Number.isInteger(idNumber) || idNumber <= 0) {
    return res.status(400).json({ error: 'id must be a positive integer' });
  }

  var fs = require('fs');
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;

    const arrayOfData = [];
    const database = JSON.parse(data);

    for (var key in database.notes) { arrayOfData.push(database.notes[key]); }

    for (var i = 0; i < arrayOfData.length; i++) {
      if (arrayOfData[i].id === idNumber) return res.status(200).send(arrayOfData[i]);
    }

    return res.status(400).json({ error: `cannot find note with id ${idNumber}` });
  });
});
// END of GET a single note =====

// POST a new note =====
app.post('/api/notes', (req, res) => {

  const userContent = req.body.content;
  if (!userContent) return res.status(400).json({ error: 'content is a required field' });

  var fs = require('fs');
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;

    const database = JSON.parse(data);
    const newId = database.nextId;

    const newContent = { id: newId, content: req.body.content };
    const newNote = { newId: newContent };

    database.notes[newId] = newContent;
    database.nextId++;

    fs.writeFile('data.json', JSON.stringify(database), 'utf8', function (err) {
      if (err) { return res.status(500).json({ error: err });}
      else { return res.status(201).send(database.notes[newId]); }
    });

  });
});
// END of POST a new note =====

// DELETE a new note =====
app.delete('/api/notes/:id', (req, res) => {

  const idNumber = Number(req.params.id);
  if (!Number.isInteger(idNumber) || idNumber <= 0) {
    return res.status(400).json({ error: 'id must be a positive integer' });
  }

  var fs = require('fs');
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;

    const arrayOfData = [];
    const database = JSON.parse(data);
    for (var key in database.notes) { arrayOfData.push(database.notes[key]); }

    // let fileWritten = false;
    for (var i = 0; i < arrayOfData.length; i++) {
      if (arrayOfData[i].id === idNumber) {

        delete database.notes[req.params.id];

        fs.writeFile('data.json', JSON.stringify(database), 'utf8', function (err) {
          // fileWritten = true;
          if (err) { return res.status(500).json({ error: err }); }
          else { return res.status(204); }
        });
      }
    }
    // if (!fileWritten) return res.status(404).json({ error: `cannot find note with id ${idNumber}` });
  });
});
// =====


// PUT a new note =====
app.put('/api/notes/:id', (req, res) => {
  const idNumber = Number(req.params.id);
  if (!Number.isInteger(idNumber) || idNumber <= 0) {
    return res.status(400).json({ error: 'id must be a positive integer' });
  }
  const userContent = req.body.content;
  if (!userContent) {
    return res.status(400).json({ error: 'content is a required field' });
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
        const result = database.notes[req.params.id];
        database.notes[req.params.id].content = userContent;
        fs.writeFile('data.json', JSON.stringify(database), 'utf8', function (err) {
          if (err) {
            return res.status(500).json({ error: err });
          }
        });
        return res.status(200).send(database.notes[req.params.id]);
      }
    }
    return res.status(400).json({ error: `cannot find note with id ${idNumber}` });
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
