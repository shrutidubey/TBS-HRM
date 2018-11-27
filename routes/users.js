const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
var ObjectId = require('mongoose').Types.ObjectId;
var nodemailer = require('nodemailer');
router.post('/register', (req, res, next) => {
    console.log("hey register"+req.body.name)
var password = req.body.password;
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        gender:req.body.gender,
        role:req.body.role

    });
 
    User.addUser(newUser, (err, user) => {
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
});



router.post('/', (req, res) => {
    console.log("hey")
    var emp = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        role:req.body.role
    });

    emp.save((err, doc) => {
        if (!err) {
            res.send(doc);
        }
        else {
            console.log("Error in Employee Save:" + JSON.stringify(err, undefined, 2));
        }
    });

});

router.post('/authenticate', (req, res, next) => {



    const username = req.body.username;
    const password = req.body.password;
    User.getUserByUsername(username, (err, user) => {
        if (err)
            throw err;
        if (!user) {
            return res.json({ success: false, msg: 'User not found' });
        }


        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err)
                throw err;
            if (isMatch) {
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 604800 
                });

                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email,
                        role:user.role
                    }
                });
            }
            else {
                 return res.json({ success: false, msg: 'Wrong password' });

            }
        });  


    });
});


router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {


    res.json({ user: req.user });
});


router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))

        return res.status(400).send('No record with given id', $(req.params.id));
    User.findById(req.params.id, (err, docs) => {
        if (!err) {
            res.send(docs);
        }
        else {
            console.log('Error in retrieving Employee' + JSON.stringify(err, undefined, 2));
        }
    });
});



router.put('/:id', (req, res) => {

    if (!ObjectId.isValid(req.params.id))
      console.log("no record with given id");
      password = req.body.password;
      console.log("inside put");
      var utc = new Date(req.body.dob).toJSON().slice(0,10).replace(/-/g,'/');
      console.log("utc"+utc);
      var d = new Date(req.body.dob)
      var getmonth = d.getMonth()
      var getdate = d.getDate();
      console.log("date"+getdate)

console.log("date inside users.js"+d.getMonth())
    var emp = {
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        role:req.body.role,
        address:req.body.address,
        contactno:req.body.contactno,
        dob:utc,
        bloodgrp:req.body.bloodgrp,
        month:getmonth,
      date:getdate
    };



   User.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
      
    if (!err) {
            res.send(doc);
            console.log("inside fin by id nad update")  
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



router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id:', $(req.params.id));
    User.findByIdAndRemove(req.params.id, (err, doc) => {

        if (!err) {
            res.send(doc);
        }
        else {
            console.log('Error in Employee Delete:' + JSON.stringify(err, undefined, 2));

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
/*
router.post('/forgot', function(req, res, next) {
    async.waterfall([
      function(done) {
        crypto.randomBytes(20, function(err, buf) {
          var token = buf.toString('hex');
          done(err, token);
        });
      },
      function(token, done) {
        User.findOne({ email: req.body.email }, function(err, user) {
          if (!user) {
            req.flash('error', 'No account with that email address exists.');
            return res.redirect('/forgot');
          }
  
          user.resetPasswordToken = token;
          user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
  
          user.save(function(err) {
            done(err, token, user);
          });
        });
      },
      function(token, user, done) {
        var smtpTransport = nodemailer.createTransport('SMTP', {
          service: 'SendGrid',
          auth: {
            user: '!!! YOUR SENDGRID USERNAME !!!',
            pass: '!!! YOUR SENDGRID PASSWORD !!!'
          }
        });
        var mailOptions = {
          to: user.email,
          from: 'passwordreset@demo.com',
          subject: 'Node.js Password Reset',
          text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
            'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
            'http://' + req.headers.host + '/reset/' + token + '\n\n' +
            'If you did not request this, please ignore this email and your password will remain unchanged.\n'
        };
        smtpTransport.sendMail(mailOptions, function(err) {
          req.flash('info', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
          done(err, 'done');
        });
      }
    ], function(err) {
      if (err) return next(err);
      res.redirect('/forgot');
    });
  });

    */
   router.post('/forgot', function(req, res, next) {
    async.waterfall([
      function(done) {
        crypto.randomBytes(20, function(err, buf) {
          var token = buf.toString('hex');
          done(err, token);
        });
      },
      function(token, done) {
        User.findOne({ email: req.body.email }, function(err, user) {
          if (!user) {
          //   console.log('error', 'No account with that email address exists.');
          req.flash('error', 'No account with that email address exists.');
            return res.redirect('/forgot');
          }
  console.log('step 1')
          user.resetPasswordToken = token;
          user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
  
          user.save(function(err) {
            done(err, token, user);
          });
        });
      },
      function(token, user, done) {
          console.log('step 2')
  
  
        var smtpTrans = nodemailer.createTransport({
           service: 'Gmail', 
           auth: {
            user: 'shrutid@techbrise.com',
            pass: 'shruti21@'
          }
        });
        var mailOptions = {
  
          to: user.email,
          from: 'myemail',
          subject: 'Node.js Password Reset',
          text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
            'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
            'http://' + req.headers.host + '/reset/' + token + '\n\n' +
            'If you did not request this, please ignore this email and your password will remain unchanged.\n'
  
        };
        console.log('step 3')
  
          smtpTrans.sendMail(mailOptions, function(err) {
          req.flash('success', 'An e-mail has been sent to ' + user.email + ' with further instructions.');
          console.log('sent')
          res.redirect('/forgot');
  });
  }
    ], function(err) {
      console.log('this err' + ' ' + err)
      res.redirect('/');
    });
  });
  
  router.get('/forgot', function(req, res) {
    res.render('forgot', {
      User: req.user
    });
  });
 



  router.get('reset/:token',function(req,res){
      User.findOne({resetPasswordToken:req.params.token,resetPasswordExpires:{$gt:Date.now()}},function(err,user){
          console.log(user);

          if(!user){
              req.flash('error','Password reset token is invalid or has expired');
              return res.redirect('/forgot');
          }
res.render('reset',{
    User:req.user
});

      });
  });

  


  


module.exports = router;