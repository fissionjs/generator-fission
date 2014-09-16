fission = require("../../app")

Item = require("../../models/Item")
DOM = fission.React.DOM
div = DOM.div
h1 = DOM.h1
module.exports = fission.collectionView(
  model: Item
  render: ->
    div
      className: "content"
    , h1({}, "Welcome")
)
