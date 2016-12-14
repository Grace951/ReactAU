var express  = require('express');
var path  = require('path');
//var open  = require('open');
var compression  = require('compression');

/* eslint-disable no-console */

// Heroku dynamically assigns your app a port, so you can't set the port to a fixed number. Heroku adds the port to the env
var port = process.env.PORT || 3000;

var app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});


app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    //open(`http://localhost:${port}`);
  }
});
