'use strict';

var express = require('express')
var fs = require('fs')
var app = express()

app.use('/',express.static('app'))

app.get('/', function (req, res) {
  var html = fs.readFileSync('app/home.html').toString()

  res.set('Content-Type', 'text/html')
  res.send(html)
  res.end()
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
