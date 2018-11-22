const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
var ObjectId = require('mongoose').Types.ObjectId;
var nodemailer = require('nodemailer');
router.get('/:username', (req, res) => {

    User.getUserByUsernames(req.params.username, (err, docs) => {
         if (!err) {
             res.send(docs);
 
 console.log("doc[0]"+docs);
         }
         else {
             console.log('Error in retrieving Employee' + JSON.stringify(err, undefined, 2));
         }
     }); 
 });



 router.get('/', (req, res) => {

    User.find((err, docs) => {
        if (!err) {
            res.send(docs);
        }
        else {
            console.log('Error in retrieving Employees:' + JSON.stringify(err, undefined, 2));
        }
    });
});
module.exports = router;