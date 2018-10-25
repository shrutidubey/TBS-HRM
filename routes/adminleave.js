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
var i = 0;
router.get('/', (req, res) => {
 empname = req.body.empname;
    person[i] = empname;
    i++
  Adminleave.find({},(err, docs) => {
        if (!err) {
            console.log("docccc"+docs['empname'])
            res.send(docs);   
        }
        else {
            console.log('Error in retrieving Leaves:' + JSON.stringify(err, undefined, 2));
        }
    });
//console.log("docs"+abcd)
  /*var usersProjection = { 
    __v: false,
    //_id: false,
    fromdate:false,
    todate:false,
    leavetype:false,
    leavereason:false
};

Adminleave.find({}, usersProjection, function (err, docs) {
    if (err) return next(err);
    res.json(docs);
 //console.log("admin leave abc"+abc);
 //localStorage.setItem("quentinTarantino", JSON.stringify(abc));

});  
*/
});

//console.log("quentinTarantino"+abc);
//console.log(vdno)
/*

getUsers = function(req, res, next) {

    var usersProjection = { 
        __v: false,
        _id: false
    };

    Adminleave.find({}, usersProjection, function (err, docs) {
        if (err) return next(err);
        res.json(docs);
    });    
}
*/
var count = 18
gemail = "null"
var gempname
var i = 0;

router.put('/:id', (req, res) => {
    email = req.body.leavetype
   // empname = req.body.empname
 console.log("empname"+req.body.empname);
  
 
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id:', $(req.params.id));
        Adminleave.find({empname:req.body.empname},{leavecount:1,_id:0},(err,docs)=>{
            fromdate = req.body.fromdate;
    todate = req.body.todate;
    var date1 = new Date(req.body.fromdate);
    var date2 = new Date(req.body.todate);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
   var   diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    var adminleave = {
        empname: req.body.empname,
        leavetype: req.body.leavetype,
        fromdate: req.body.fromdate,
        todate: req.body.todate,
        leavereason: req.body.leavereason,
        leavecount: req.body.leavecount - diffDays-1,
         status: req.body.status, 
    };
   Adminleave.find({empname:req.body.empname},{leavecount:1,_id:0},(err,docs)=>{
      /*  if(!err)
        res.send(docs);*/
        var abc = docs[0];
        console.log("abc"+JSON.stringify(abc))
        if(abc)
        console.log(true)
        else
        console.log(false)

        Adminleave.findByIdAndUpdate(req.params.id,{ $set: adminleave },{ upsert: true, new: true }, (err, doc) => {
            if (!err) {
                res.send(doc);
                empname = gempname;  
            }
            else {
                console.log('Error in status Update:' + JSON.stringify(err, undefined, 2));
            }
        });
    /*    Adminleave.update(
            { 
                _id: found._id, 
                'leaves.empname': req.params.user_id
            },
            {
                $set: { 'leaves.$.leavecount': '18'} },
            }, function(err, count) 
                   if (err) return next(err);
                   callback(err, count);
        });
        */
   //adminleave.save( { empname : req.body.empname, leavecount: 90} );
   });


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

/*
    Adminleave.findByIdAndUpdate(req.params.id,{ $set: adminleave },{ upsert: true, new: true }, (err, doc) => {
        if (!err) {
            res.send(doc);
            empname = gempname;  
        }
        else {
            console.log('Error in status Update:' + JSON.stringify(err, undefined, 2));
        }
    });
    */
    
   var j
   for(j=0;j<person.length;j++)
   console.log("full array"+person[j])
});
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