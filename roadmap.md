
scaffold:
==========

$ yo fission --coffee
$ fission newapp Items --coffee

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

$ cd Items
$ fission gen crud Item

- server model, client view , route 

models: 
  server/models/Item.coffee
  client/models/Item.coffee

  module.exports = new Schema

  text: 
    type: String
    required: true
  done: Boolean  

client/pages/Item/Items.view.coffee 

view(s):

fission.collectionView
  model: Item
  render: ->

REST endpoints (if rest):
  
  resource/Item/
    get 
    patch
    post

