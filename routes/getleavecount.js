

const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/leavedatabase');
const Adminleave = require('../models/leave');
var ObjectId = require('mongoose').Types.ObjectId;

var nodemailer = require('nodemailer');
const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);



router.get('/', (req, res) => {
    empname = req.body.empname;
    person[i] = empname;
    i++
  Adminleave.find((err, docs) => {
        if (!err) {
            console.log(docs['empname'])
            res.send(docs);
            
        }
        else {
            console.log('Error in retrieving Leaves:' + JSON.stringify(err, undefined, 2));
        }
    });

});