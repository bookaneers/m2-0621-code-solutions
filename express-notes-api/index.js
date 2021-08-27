const express = require('express');
const app = express();

app.use(express.json()); // middleware

app.get('/api/notes', (req, res) => {

  var fs = require('fs');
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;

    const arrayOfData = [];
    const database = JSON.parse(data);
    for (var key in database.notes) { arrayOfData.push(database.notes[key]); }

    res.status(200).send(arrayOfData);
  });
});

app.get('/api/notes/:id', (req, res) => {

  const idNumber = Number(req.params.id);
  if (!Number.isInteger(idNumber) || idNumber <= 0) {
    return res.status(400).json({ error: 'id must be a positive integer' });
  }

  var fs = require('fs');
  fs.readFile('data.json', 'utf8', (err, data) => {
    const database = JSON.parse(data);
    if (err) throw err;
    if (database.notes[idNumber]) res.status(200).json(database.notes[idNumber]);
    else res.status(404).json({ error: `cannot find note with id ${idNumber}` });
  });
});

app.post('/api/notes', (req, res) => {

  if (!req.body.content) return res.status(400).json({ error: 'content is a required field' });

  var fs = require('fs');
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;

    const database = JSON.parse(data);
    const newId = database.nextId;
    const newContent = { id: newId, content: req.body.content };
    database.notes[newId] = newContent;
    database.nextId++;

    fs.writeFile('data.json', JSON.stringify(database), 'utf8', function (err) {
      if (err) return res.status(500).json({ error: 'An unexpected error occurred.' });
      else return res.status(201).json(database.notes[newId]);
    });
  });
});

app.delete('/api/notes/:id', (req, res) => {

  const idNumber = Number(req.params.id);
  if (!Number.isInteger(idNumber) || idNumber <= 0) {
    return res.status(400).json({ error: 'id must be a positive integer' });
  }

  var fs = require('fs');
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;

    const database = JSON.parse(data);
    console.log(database.notes[idNumber])
    if (database.notes[idNumber]) delete database.notes[idNumber];
    else return res.status(404).json({ error: `cannot find note with id ${idNumber}` });

    fs.writeFile('data.json', JSON.stringify(database), 'utf8', function (err) {
      if (err) return res.status(500).json({ error: 'An unexpected error occurred.' });
      else return res.status(204).json({});
    });
  });
});

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

    const database = JSON.parse(data);
    if (database.notes[idNumber]) database.notes[idNumber].content = userContent;
    else res.status(404).json({ error: `cannot find note with id ${idNumber}` });

    fs.writeFile('data.json', JSON.stringify(database), 'utf8', function (err) {
      if (err) return res.status(500).json({ error: 'An unexpected error occurred.'});
      else return res.status(200).json(database.notes[idNumber]);
    });
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});


// I was able to test all the erros
