const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/leavedatabase');
const Leave = require('../models/leave');
var count1 = require('./adminleave');
var ObjectId = require('mongoose').Types.ObjectId;
const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
const adminleave = require('./adminleave');


router.post('/', (req, res) => {

    var leave = new Leave({
        empname: req.body.empname,
        leavetype: req.body.leavetype,
        fromdate: req.body.fromdate,
        todate: req.body.todate,
        leavereason: req.body.leavereason,
        leavecount: count,
        status: "pending"
    });


    leave.save((err, doc) => {
        if (!err) {
            res.send(doc);
        }
        else {
            console.log("Error in Leave Save:" + JSON.stringify(err, undefined, 2));
        }
    });

});





router.get('/:username', (req, res) => {

    Leave.getUserByUsername(req.params.username, (err, docs) => {
        if (!err) {
            res.send(docs);

        }
        else {
            console.log('Error in retrieving Leave' + JSON.stringify(err, undefined, 2));
        }
    });
});




router.get('/', (req, res) => {

    Leave.find((err, docs) => {
        if (!err) {
            res.send(docs);
            console.log(req.empname);
        }
        else {
            console.log('Error in retrieving Leaves:' + JSON.stringify(err, undefined, 2));
        }
    });
});




module.exports = router;