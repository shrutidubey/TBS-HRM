const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Leave = require('../models/leave');
var ObjectId = require('mongoose').Types.ObjectId;
var nodemailer = require('nodemailer');

/*
router.get('/:username', (req, res) => {

    User.getUserByUsername(req.params.username, (err, docs) => {
        if (!err) {
            console.log("hey")
            res.send(docs);

        }
        else {
            console.log('Error in retrieving Leave' + JSON.stringify(err, undefined, 2));
        }
    });
});

*/

/*
router.get('/:username', (req, res) => {

    User.getUserByUsername(req.params.username, (err, docs) => {
        if (!err) {
           //  console.log("hey")
        //   console.log("document"+docs);
            res.send(docs);
            console.log("doc[0]"+docs)

        }
        else {
            console.log('Error in retrieving Leave' + JSON.stringify(err, undefined, 2));
        }
    });
});
*/
router.get('/:username', (req, res) => {
    /*    User.getUserByUsername(req.params.username,(err,docs)=>{
            if(!err){
                console.log("doc[0]"+docs[0]);
            }
        })*/
      User.getUserByUsername(req.params.username, (err, docs) => {
           if (!err) {
               res.send(docs);
   
   console.log("doc[0]"+docs);
           }
           else {
               console.log('Error in retrieving Leave' + JSON.stringify(err, undefined, 2));
           }
       });
   });

module.exports = router;