fission = require("../../app")

Todo = require("../../models/Todo")
DOM = fission.React.DOM
div = DOM.div
h1 = DOM.h1
module.exports = fission.collectionView(
  model: Todo
  render: ->
    div
      className: "content"
    , h1({}, "Welcome")
)
