var express = require('express');
var app = express();

app.use(function (req, res, next) {
  console.log(req.method);
  res.send('hello hello');
  next();
})

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
