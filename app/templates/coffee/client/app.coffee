Fission = require 'fission'
console.log Fission
fission = new Fission
  sync: (method, model, options) ->
    console.log method, model, options
    if method is 'create'
      model.id = Math.floor(Math.random() * (100 - 1)) + 1

module.exports = fission