fission = require '../app'

module.exports =

  fission.model
    props:
      id: 'integer'
      text: 'string'
    url: '/v1/item'
