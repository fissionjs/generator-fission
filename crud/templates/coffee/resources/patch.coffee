isObjectId = require '../../lib/isObjectId'
db = require '../../db'
Item = db.model 'item'

canModify = ['name', 'description']  ## Whitelist, what the item can modify

module.exports = (req, res, next) ->
  return res.status(403).end() unless req.isAuthenticated()
  return next new Error 'Invalid id parameter' unless isObjectId req.params.id
  return res.status(403).end() unless req.params.id is String(req.item._id)
  return next new Error 'Invalid body' unless typeof req.body is 'object'

  # dont allow modification of reserved fields
  # canModify is the whitelist here
  delete req.body[k] for k,v of req.body when canModify.indexOf(k) is -1

  q = Item.findById req.params.id
  q.exec (err, item) ->
    return next err if err?

    item.set req.body

    item.save (err, nitem) ->
      return next err if err?
      res.status(200).json nitem.toJSON()
