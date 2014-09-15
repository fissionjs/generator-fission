
scaffold:
==========

$ yo fission --coffee
$ fission newapp Todos --coffee

v1:
- js or coffee
- server or no server

v2:
- perisistence (firebase / local / REST)
- auth (fb / twitter / email / none)

v4:
- perms

generator:
==========

$ cd Todos
$ fission gen crud Todo

- server model, client view , route 

models: 
  server/models/Todo.coffee
  client/models/Todo.coffee

  module.exports = new Schema

  text: 
    type: String
    required: true
  done: Boolean  

client/pages/Todo/Todos.view.coffee 

view(s):

fission.collectionView
  model: Todo
  render: ->

REST endpoints (if rest):
  
  resource/Todo/
    get 
    patch
    post

