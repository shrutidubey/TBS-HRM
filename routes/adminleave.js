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



router.post('/', (req, res) => {
    var adminleave = new Adminleave({
        empname: req.body.empname,
        leavetype: req.body.leavetype,
        fromdate: req.body.fromdate,
        todate: req.body.todate,
        leavereason: req.body.leavereason,
        status: req.body.status
    });


    adminleave.save((err, doc) => {
        if (!err) {
            res.send(doc);
        }
        else {
            console.log("Error in Leave Save:" + JSON.stringify(err, undefined, 2));
        }
    });

});


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


router.get('/', (req, res) => {

    Adminleave.find((err, docs) => {
        if (!err) {
            res.send(docs);
        }
        else {
            console.log('Error in retrieving Leaves:' + JSON.stringify(err, undefined, 2));
        }
    });
});

count = 18
gemail = "null"
var email
var leavecount = 18
router.put('/:id', (req, res) => {
    email = req.body.leavetype

    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id:', $(req.params.id));

    var adminleave = {
        empname: req.body.empname,
        leavetype: req.body.leavetype,
        fromdate: req.body.fromdate,
        todate: req.body.todate,
        leavereason: req.body.leavereason,
        leavecount: count - 1,
        status: req.body.status
    };
    var emailmailer = email

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'shrutid@techbrise.com',
            pass: 'shruti21@'
        }
    });

    var mailOptions = {
        from: 'shrutid@techbrise.com',

        to: req.body.leavetype,
        subject: 'Regarding leave',
        text: 'Leave Approved'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log('Email sent' + info.response);
        }
    });


    Adminleave.findByIdAndUpdate(req.params.id, { $set: adminleave }, { upsert: true, new: true }, (err, doc) => {
        if (!err) {
            res.send(doc);

        }
        else {
            console.log('Error in status Update:' + JSON.stringify(err, undefined, 2));
        }
    });
    --leavecount;
    count = leavecount;
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id:', $(req.params.id));
    Adminleave.findByIdAndRemove(req.params.id, (err, doc) => {

        if (!err) {
            res.send(doc);
        }
        else {
            console.log('Error in leave Delete:' + JSON.stringify(err, undefined, 2));

        }

    });

});





module.exports = router;