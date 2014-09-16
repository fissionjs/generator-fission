'use strict';

var express = require('express');
var http = require('http');
var join = require('path').join;

var PORT = Number(process.env.PORT || 8080);

var app = express();

app.use(express['static'](join(__dirname, 'public')));

app.get('/*', function(req, res){
  var idxFile = join(__dirname, 'public/index.html');
  return res.status(200).sendFile(idxFile);
});

var httpServer = http.createServer(app);

httpServer.listen(PORT, function(){
  console.log('info', 'server running on ' + PORT);
});
