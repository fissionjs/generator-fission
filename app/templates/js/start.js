'use strict';
var express = require('express');
var http = require('http');
var join = require('path').join;

var PORT = Number(process.end.PORT || 8080);

var app = express();

app.use(express['static'](join(__dirname, 'public')));

app.use(function(err, req, res, next) {
  console.error(err.stack);
  return res.send(500, 'Something broke!');
});

app.get('/*', function(req, res){
  var idxFile = join(__dirname, 'public/index.html');
  res.status(200).sendFile(idxFile);
});

var httpServer = http.createServer(app);

httpServer.listen(PORT, function(){
  console.log('info', 'server running on'+PORT);
});
