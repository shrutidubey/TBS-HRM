const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/leavedatabase');
const Adminleave = require('../models/leave');
const User = require('../models/user');
var ObjectId = require('mongoose').Types.ObjectId;

var nodemailer = require('nodemailer');
const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);


router.get('/:username', (req, res) => {

    Adminleave.getUserAndLeave(req.params.username, (err, docs) => {
         if (!err) {
             res.send(docs);
 
 console.log("doc[0]"+docs);
         }
         else {
             console.log('Error in retrieving Employee' + JSON.stringify(err, undefined, 2));
         }
     }); 
 });


/*
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id:', $(req.params.id));

    Adminleave.findById(req.params.id, (err, docs) => {
        if (!err) {
            res.send(docs);
        }
        else {
            console.log('Error in retrieving Leave' + JSON.stringify(err, undefined, 2));
        }
    });
});
*/
var i = 0;
router.get('/', (req, res) => {
 empname = req.body.empname;
    person[i] = empname;
    i++
  Adminleave.find({},(err, docs) => {
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