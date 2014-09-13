var http = require('http');
var join = require('path').join;
var express = require('express');
var bodyParser = require('body-parser');
var PORT = Number(process.env.PORT || 8080);
var app = express();

app.use(express.static(join(__dirname, 'public')));
app.use(bodyParser());

app.use(function(err, req, res, next) {
  console.error(err.stack);
  return res.send(500, 'Something broke!');
});


var Todos = [
  {
    id: '1',
    text: 'Make a REST example',
    done: true
  }
];

app.route('/v1/todos')
  .get(function(req, res){
    res.status(200).json(Todos);
  })
  .post(function(req, res){
    if (req.body.id){
      return console.log('Got POST'+ req.body);
    }
    var item = req.body;
    var last = Todos[Todos.length - 1];
    if(!last){
      last = {
        id: 0
      };
    }

    item.id = String(Number(last.id) + 1);
    Todos.push(item);
    res.status(200).json(item);
    console.log('CREATED: ' + item.id);
  });

app.route('/v1/todos/:id')
  .get(function(req, res){
    res.status(200).json(Todos[req.params.id - 1]);
  })
  .delete(function(req, res){
    Todos.splice(req.params.id -1, 1);
    console.log('GOT DELETE: ' + req.params.id);
  })
  .post(function(req, res){
    console.log('GOT POST: ' + req.body.id);
  }).put(function(req, res){
    console.log('GOT PUT: ' + req.body.id);
  });


app.get('/*', function(req, res) {
  var idxFile;
  idxFile = join(__dirname, 'public/index.html');
  return res.status(200).sendFile(idxFile);
});

var httpServer = http.createServer(app);

httpServer.listen(PORT, function() {
  return console.log('info', 'Server running on ' + PORT);
});
