'use strict';

var isObjectId = require('../../lub/isObjectId');
var db = require('../../db');
var Item = db.model('Item');
var q;


module.exports = function(req, res, next){
  if(typeof(req.params.id) !== 'string'){
    new Error('Invalid id paramater');
    return next;
  }

  if(isObjectId(req.params.id)){
    q = Item.findById(req.params.id);
    //translate to coffee
    //isOwner = req.item? and (String(req.item._id) is req.params.id)
  }
  else{
    q = Item.findOne({itemname: req.params.id});
    //next line in coffee
    //isOwner = req.item? and (String(req.item.itemname) is req.params.id or String(req.item.id) is req.params.id)
  }

  q.exec(function(err, item){
    if(err){
      return next;
    }

    if(!item){
      return res.status(404).end();
    }
  });
};
