var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('NUEVO HOLA MUNDO...');
});

app.listen(3000, function () {
  console.log('listening on port 3000!');
});

