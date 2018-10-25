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
var JSAlert = require("js-alert");
//var popupS = require('popups');
//var tenure = prompt("Please enter preferred tenure in years", "15");
//var popup  = require('popups')
//var LocalStrategy = require('passport-local').Strategy;
var count1 = 18;var j=18; var ocount= 18; var count1   = 18; var label = 18; var label1 = 18;
var alert = require('alert-node')
/*router.post('/', (req, res) => {
    var a=12;var b = 12;
   
       // console.log("leave.js"+person[i])
    
 oemp = req.body.empname;
 console.log("oemp"+oemp);
 console.log("empname"+empname);


    ocount = count1 -1;
    count1 --
   var leave = new Leave({
    empname: req.body.empname,
    leavetype: req.body.leavetype,
    fromdate: req.body.fromdate,
    todate: req.body.todate,
    leavereason: req.body.leavereason,
    leavecount: ocount,
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

/*var leave = new Leave({
    empname: req.body.empname,
    leavetype: req.body.leavetype,
    fromdate: req.body.fromdate,
    todate: req.body.todate,
    leavereason: req.body.leavereason,
    leavecount: j,
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
label:console.log("abc");
*/
/*
router.post('/', (req, res) => {
 oempid = req.params.id

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
*/
/*
 if(oempid === empid){
    var leave = new Leave({
        empname: req.body.empname,
        leavetype: req.body.leavetype,
        fromdate: req.body.fromdate,
        todate: req.body.todate,
        leavereason: req.body.leavereason,
        leavecount: count-1,
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
}

*/



var count = 18; person = []; var diffDays
router.post('/', (req, res) => {
  //  JSAlert.alert("This is an alert.");
    empname = req.body.empname;
    fromdate = req.body.fromdate;
    todate = req.body.todate;
    /*var timeDiff = Math.abs(todate - fromdate);
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); */
    var date1 = new Date(req.body.fromdate);
    var date2 = new Date(req.body.todate);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
     diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    console.log("total no.of days"+diffDays);
   /* if(diffDays-1 === 0 ){
        console.log("you don't have any leaves ")
    }
    */
    Leave.find({empname:req.body.empname},{leavecount:1,_id:0},(err,docs)=>{
        /*  if(!err)
          res.send(docs);*/

         if(docs[0]===undefined){
         console.log(docs)
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

         }
         else{
         var abc = docs[0].leavecount;
          var length = docs.length
          for(i=0;i<docs.length;i++){
             newleavecount = docs[i].leavecount
             console.log("newleavecount"+newleavecount)
          }

          console.log("new leave count"+newleavecount);
          console.log("abc"+JSON.stringify(abc))
          console.log("lenght"+length)
          if(abc)
          console.log(abc)
          else
          console.log(false)
    if(newleavecount===0 || leavecount<0){
        console.log("you don't have any leaves left")
      /* popup.alert({
            content: 'Hello!'
        });*/
       
      // JSAlert.alert("This is an alert.");
      alert('you can\'t take more than 18 leaves');
    }
       /*  Adminleave.findByIdAndUpdate(req.params.id,{ $set: adminleave },{ upsert: true, new: true }, (err, doc) => {
              if (!err) {
                  res.send(doc);
                  empname = gempname;  
              }
              else {
                  console.log('Error in status Update:' + JSON.stringify(err, undefined, 2));
              }
          });*/
          else{
var leave = new Leave({
    empname: req.body.empname,
    leavetype: req.body.leavetype,
    fromdate: req.body.fromdate,
    todate: req.body.todate,
    leavereason: req.body.leavereason,
    leavecount: newleavecount,
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
          }
}
});

/*
var leave = new Leave({
    empname: req.body.empname,
    leavetype: req.body.leavetype,
    fromdate: req.body.fromdate,
    todate: req.body.todate,
    leavereason: req.body.leavereason,
   leavecount: newleavecount,
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
*/
});

 gdiffDays = diffDays
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

router.get('/leavecount',(req,res)=>{
    Leave.find({empname:"shruti"},{leavecount:1,_id:0},(err,docs)=>{
        console.log("hey")
        if(!err)
        res.send(docs);
        var abc = docs[0];
        console.log("abc"+JSON.stringify(abc))
        if(abc)
        console.log("true")
        else
        console.log("false")
        
    
    })
})


router.get('/', (req, res) => {

    Leave.find((err, docs) => {
        if (!err) {
           
            res.send(docs);
            console.log("hi from admin");
        }
        else {
            console.log('Error in retrieving Leaves:' + JSON.stringify(err, undefined, 2));
        }
    });
});






module.exports = router;