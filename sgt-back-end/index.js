const express = require('express');
const app = express();

app.use(express.json()); // middleware

const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

// GET ONE ID
app.get('/api/grades/:gradeId', (req, res, next) => {

  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer.'
    });
    return;
  }

  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
     where "gradeId" = $1
  `;

  const params = [gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}.`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: `An unexpected error occurred.`
      });
    });
});

// GET ALL
app.get('/api/grades', (req, res, next) => {

  const sql = `
    select *
      from "grades"
  `;

  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: `An unexpected error occurred.`
      });
    });
});


// POST
app.post('/api/grades', (req, res, next) => {

  const nameBody = req.body.name;
  const courseBody = req.body.course;
  const scoreBody = parseInt(req.body.score, 10);

  if ((!nameBody) || (!courseBody) || (!scoreBody)) {
    res.status(400).json({
      error: `"invalid grade". Missing "name", "course", or "score".`
    });
    return;
  }

  if (!Number.isInteger(scoreBody) || (scoreBody > 100 || scoreBody <= 0)) {
    res.status(400).json({
      error: `"gradeId" must be a positive integer between 0 and 100.`
    });
    return;
  }

  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *
  `;
  const values = [nameBody, courseBody, scoreBody];

  db.query(sql, values)
    .then(result => {
      res.status(201).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: `An unexpected error occurred.`
      });
    });
});

// PUT
app.put('/api/grades/:gradeId', (req, res, next) => {

  const gradeId = Number(req.params.gradeId);
  const nameBody = req.body.name;
  const courseBody = req.body.course;
  const scoreBody = Number(req.body.score);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: `"gradeId" must be a positive integer.`
    });
    return;
  }

  if ((!nameBody) || (!courseBody) || (!scoreBody)) {
    res.status(400).json({
      error: `"invalid grade". Missing "name", "course", or "score".`
    });
    return;
  }

  if (!Number.isInteger(scoreBody) || (scoreBody > 100 || scoreBody <= 0)) {
    res.status(400).json({
      error: `"score" must be a positive integer between 0 and 100.`
    });
    return;
  }

  const sql = `
    update "grades"
    set "name" = $2,
    "course" = $3,
    "score" = $4
    where "gradeId" = $1
    returning *
  `;
  const values = [gradeId, nameBody, courseBody, scoreBody];

  db.query(sql, values)
    .then(result => {
      res.status(201).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: `An unexpected error occurred.`
      });
    });
});

// DELETE
app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId); // radix is decimal
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer.'
    });
    return;
  }

  const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning *
  `;

  const params = [gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {

        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}.`
        });
      } else {
        res.status(204).json(result.rows);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: `An unexpected error occurred.`
      });
    });
});

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
