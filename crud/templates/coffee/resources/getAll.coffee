isObjectId = require '../../lib/isObjectId'
db = require '../../db'
Item = db.model 'Item'

module.exports = (req, res, next) ->
  return res.status(403).end() unless req.isAuthenticated()

  # return all
  q = Item.find()
  q.select '-token'
  q.limit 3

  q.exec (err, items) ->
    return next err if err?
    res.status(200).json items
