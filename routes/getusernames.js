const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/leavedatabase');
const Adminleave = require('../models/leave');
var nodemailer = require('nodemailer');
const mongoose = require('mongoose')
var ObjectId = require('mongoose').Types.ObjectId;
const User = require('../models/user');



router.get('/', (req, res) => {

    User.find({ },{name:1},(err, docs) => {
        if (!err) {
            res.send(docs);
        }
        else {
            console.log('Error in retrieving Employees:' + JSON.stringify(err, undefined, 2));
        }
    });
});
/*
router.get('/',(req,res)=>{

    Holiday.find((err,docs)=>{
         if(!err){
             res.send(docs);
         }
         else
         {
             console.log('Error in retrieving Holidays:'+JSON.stringify(err,undefined,2));
         }
    });
    });
    */
module.exports = router;