const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database1');
const Event = require('../models/event');
var ObjectId = require('mongoose').Types.ObjectId;
var leave = require('../models/leave');
const User = require('../models/user');
const crypto = require('crypto')
const async = require('async')
const nodemailer = require('nodemailer')
var alert = require('alert-node')
var JSAlert = require("js-alert");
const bcrypt = require('bcryptjs')
var newpass;
router.put('/:id', (req, res) => {

     var newname = req.body.name;
     var newemail = req.body.email;
     var newusername = req.body.username;
     var newpassword = req.body.password;
     var newrole = req.body.role;
     var confirmpassword = req.body.newpassword;
//var newpassword = req.body.newpassword;
//var confirmpassword = req.body.newpassword;

//console.log("newpassword"+newpassword);
//console.log("confirmpassword"+confirmpassword);
      /*  if (!ObjectId.isValid(req.params.id))
            return res.status(400).send('No record with given id:', $(req.params.id));
        User.findByIdAndRemove(req.params.id, (err, doc) => {
    
            if (!err) {
                res.send(doc);
            }
            else {
                console.log('Error in Employee Delete:' + JSON.stringify(err, undefined, 2));
    
            }
    
        });*/

        console.log("newpassword"+newpassword);
        console.log("newpassword"+confirmpassword);
    if(newpassword == confirmpassword){
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newpassword, salt, (err, hash) => {
                console.log("original password"+newpassword);
                newpass = hash;
                console.log("new password"+newpass);
               // newUser.save(callback);
           
    

    var emp = {
        name: newname,
        email: newemail,
        username: newusername,
        password: newpass,
        role:newrole
      
    };

   
   /* User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to register user' });
            
        } else {
            res.json({ success: true, msg: 'User registered' });
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'shrutid@techbrise.com',
                    pass: 'shruti21@'
                }
            });
        
            var mailOptions = {
                from: 'shrutid@techbrise.com',
                to: req.body.email,
                subject: 'Regarding Registration',
                text: 'Hello' +req.body.name+'Your username is'+ req.body.username+'and password is'+
                password+'and role assigned is'+req.body.role
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
    });
 
*/

   User.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
      
    if (!err) {
            res.send(doc);
            console.log("inside find by id nad update")  
            if(req.body.role==="Admin"){
                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'shrutid@techbrise.com',
                        pass: 'shruti21@'
                    }
                });
            
                var mailOptions = {
                    from: 'shrutid@techbrise.com',
            
                    to: req.body.email,
                    subject: 'Admin Username and Password',
                    text: 'Hello' +req.body.name+'The  username for admin is'+ 'admin'+'and password is'+
                    'admin'+'please use this to log in'
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
        else{
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'shrutid@techbrise.com',
                    pass: 'shruti21@'
                }
            });
        
            var mailOptions = {
                from: 'shrutid@techbrise.com',
                to: req.body.email,
                subject: 'Regarding Change in Details',
                text: 'Hello' +req.body.name+'Your username is'+ req.body.username+'and password is'+
                req.body.password+'and role assigned is'+req.body.role
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
    }
        else {
            console.log('Error in Employee Update:' + JSON.stringify(err, undefined, 2));

        }
    
    });

});
});
    }
    else{
        console.log("passwords don't match ")
        alert('Passwords don\'t match');

    }

}); 

module.exports = router;