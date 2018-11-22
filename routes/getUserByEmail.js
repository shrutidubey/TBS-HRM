const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
var ObjectId = require('mongoose').Types.ObjectId;
var nodemailer = require('nodemailer');


router.get('/:email', (req, res) => {
console.log("email"+req.params.email);
    User.getUserByEmail(req.params.email, (err, docs) => {
         if (!err) {
             res.send(docs); 
              console.log("doc[0]"+docs);
              console.log("id is"+docs._id);
              var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'shrutid@techbrise.com',
                    pass: 'shruti21@'
                }
            });
           
            var mailOptions = {
                from: 'shrutid@techbrise.com',
        
                to: req.params.email,
                subject: 'Password change request',
                text: 'Please click on the following link to change password'
                             
            };
        
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log('Email sent' + info.response);
                }
            });


         }
         else {
             console.log('Error in retrieving Leave' + JSON.stringify(err, undefined, 2));
         }
     });
    
 });

 module.exports = router;