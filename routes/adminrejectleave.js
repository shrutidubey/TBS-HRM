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

    var adminrejectleave = {
        empname: req.body.empname,
        leavetype: req.body.leavetype,
        fromdate: req.body.fromdate,
        todate: req.body.todate,
        leavereason: req.body.leavereason,
        leavecount: req.body.leavecount,
        status: req.body.status
    };
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
        text: 'Leave Rejected'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log('Email sent' + info.response);
        }
    });

    Adminleave.findByIdAndUpdate(req.params.id, { $set: adminrejectleave }, { new: true }, (err, doc) => {
        if (!err) {

            res.send(doc);
        }
        else {
            console.log('Error in status Update:' + JSON.stringify(err, undefined, 2));

        }
    });
});



module.exports = count;
module.exports = router;