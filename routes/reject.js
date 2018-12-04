const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/leavedatabase');
const Adminleave = require('../models/leave');
var nodemailer = require('nodemailer');
const mongoose = require('mongoose')
var ObjectId = require('mongoose').Types.ObjectId;

var count = 18;

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id:', $(req.params.id));
else
console.log("put ")
  /*  var adminrejectleave = {
        empname: req.body.empname,
        leavetype: req.body.leavetype,
        fromdate: req.body.fromdate,
        todate: req.body.todate,
        leavereason: req.body.leavereason,
        leavecount: req.body.leavecount,
        status: "rejected"
    };*/
    
});



module.exports = count;
module.exports = router;