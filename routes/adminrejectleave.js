const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/leavedatabase');
const Adminleave = require('../models/leave');
var ObjectId = require('mongoose').Types.ObjectId;
  /*  
     router.post('/',(req,res)=>{
       var adminleave = new Adminleave({
        empname:req.body.empname,
        leavetype:req.body.leavetype,
        fromdate:req.body.fromdate,
        todate:req.body.todate,
        leavereason:req.body.leavereason,
        status:req.body.status
        });

   
       adminleave.save((err,doc)=>{
            if(!err)
            {
                res.send(doc);
            }
            else{
                console.log("Error in Leave Save:"+JSON.stringify(err,undefined,2));
            }
        });
      
    });


        router.get('/:id',(req,res)=>{
            if(!ObjectId.isValid(req.params.id))
            return res.status(400).send('No record with given id:',$(req.params.id));
    
            Adminleave.findById(req.params.id,(err,docs)=>{
                if(!err){
                    res.send(docs);
                }
                else{
                    console.log('Error in retrieving Leave'+JSON.stringify(err,undefined,2));
                }
            });
        });*/
    
/*
     router.get('/',(req,res)=>{

      Adminleave.find((err,docs)=>{
            if(!err){
                res.send(docs);
            }
            else
            {
                console.log('Error in retrieving Leaves:'+JSON.stringify(err,undefined,2));
            }
       });
       });
       */
       var count = 18;

       router.put('/:id',(req,res)=>{
        if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id:',$(req.params.id));
       
        var adminrejectleave = {
            empname: req.body.empname,
            leavetype:req.body.leavetype,
            fromdate:req.body.fromdate,
            todate:req.body.todate,
            leavereason:req.body.leavereason,
            leavecount:req.body.leavecount,
            status:req.body.status
        };
        
        Adminleave.findByIdAndUpdate(req.params.id,{$set:adminrejectleave},{new:true},(err,doc)=>{
            if(!err){
                //console.log("leave count:"+leavecount);
                res.send(doc);
            }
            else{
                console.log('Error in status Update:'+JSON.stringify(err,undefined,2));

            }
        });
    });

   /*   

    router.delete('/:id',(req,res)=>{
        if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id:',$(req.params.id));
        Adminleave.findByIdAndRemove(req.params.id,(err,doc)=>{

            if(!err){
                res.send(doc);
            }
            else{
                console.log('Error in leave Delete:'+JSON.stringify(err,undefined,2));

            }

        });
    
    });
    */

module.exports = count;
module.exports = router;