isObjectId = require '../../lib/isObjectId'
db = require '../../db'
Item = db.model 'Item'

module.exports = (req, res, next) ->
  #return res.status(403).end() unless req.isAuthenticated()
  return next new Error('Invalid id parameter') unless typeof req.params.id is 'string'

  if isObjectId req.params.id
    # look up by db id
    q = item.findById req.params.id
    isOwner = req.item? and (String(req.item._id) is req.params.id)
  else
    # look up by itemname
    q = item.findOne itemname: req.params.id
    isOwner = req.item? and (String(req.item.itemname) is req.params.id or String(req.item.id) is req.params.id)

  q.exec (err, item) ->
    return next err if err?
    return res.status(404).end() unless item?

    item = item.toJSON()

    # security
    unless isOwner
      delete item.token

    res.status(200).json item
