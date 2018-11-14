const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/leavedatabase');
const Leave = require('../models/leave');
const User = require('../models/user')
var count1 = require('./adminleave');
const Adminleave = require('../models/leave');
var ObjectId = require('mongoose').Types.ObjectId;
const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
const adminleave = require('./adminleave');
var JSAlert = require("js-alert");
var count1 = 18;var j=18; var ocount= 18; var count1   = 18; var label = 18; var label1 = 18;
var alert = require('alert-node')



router.get('/empname', (req, res) => {


    User.find({username:req.body.username},{role:1},(err,docs)=>{
         console.log("id"+docs[0].role)
});

});



router.get('/pendingleaves',(req,res)=>{

  console.log("inside pending leaves")

  
Adminleave.find({status:"pending"},(err, docs) => {
      if (!err) {
          console.log("docccc"+docs['empname'])
          res.send(docs);   
      }
      else {
          console.log('Error in retrieving Leaves:' + JSON.stringify(err, undefined, 2));
      }
  });


});

module.exports = router;