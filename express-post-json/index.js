var express = require('express');
var app = express();
app.use(express.json());

var nextID = 1;
var grades = [];
var grade = {};

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.post('/api/grades', (req, res) => {
  const grade = {
    id: nextID,
    name: req.body.name,
    course: req.body.course,
    score: req.body.score,
  };
  grades.push(grade);
  res.status(201).send(grades);
  nextID++;
})

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
