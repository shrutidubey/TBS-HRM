const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/announcement');
const Announcement = require('../models/announcement');

var ObjectId = require('mongoose').Types.ObjectId;
var leave = require('../models/leave');

router.post('/register',(req,res,next)=>{


let newUser = new User({
    name:req.body.name,
    email:req.body.email,
    username:req.body.username,
    password:req.body.password
});

User.addUser(newUser,(err,user)=>{
if(err){
    res.json({success:false,msg:'Failed to register user'});

}else
{
    res.json({success:true,msg:'User registered'});
}
});
});



    router.post('/',(req,res)=>{
       var announcement = new Announcement({
            announcement:req.body.announcement,
          
        });

       announcement.save((err,doc)=>{
            if(!err)
            {
                res.send(doc);
            }
            else{
                    console.log("Error in Event Save:"+JSON.stringify(err,undefined,2));
            }
        });
      
    });

router.post('/authenticate',(req,res,next)=>{
  


   const username = req.body.username;
   const password = req.body.password;
   User.getUserByUsername(username,(err,user)=>{
       if(err)
       throw err;
       if(!user){
           return res.json({success:false,msg:'User not found'});
       }
     

      User.comparePassword(password,user.password,(err,isMatch)=>{
           if(err)
           throw err;
           if(isMatch){
               const token = jwt.sign(user.toJSON(),config.secret,{
                   expiresIn:604800
               });

               res.json({
                   success:true,
                   token:'JWT '+token,
                   user:{
                       id:user._id,
                       name:user.name,
                       username:user.username,
                       email:user.email
                   }
               });
           }
           else{
               return res.json({success:false,msg:'Wrong password'});

           }
       });

     
   });
    });


    router.get('/profile',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
       

        res.json({user:req.user});
        });


        router.get('/:id',(req,res)=>{
            if(!ObjectId.isValid(req.params.id))
            return res.status(400).send('No record with given id:',$(req.params.id));
    
            Announcement.findById(req.params.id,(err,docs)=>{
                if(!err){
                    res.send(docs);
                }
                else{
                    console.log('Error in retrieving Employee'+JSON.stringify(err,undefined,2));
                }
            });
        });
    


        router.put('/:id',(req,res)=>{
            if(!ObjectId.isValid(req.params.id))
             return res.status(400).send('No record with given id:',$(req.params.id));
            var announcement = {
                announcement:req.body.announcement
            };

            Announcement.findByIdAndUpdate(req.params.id,{$set:announcement},{new:true},(err,doc)=>{
                if(!err){
                    res.send(doc);
                }
                else{
                    console.log('Error in Event Update:'+JSON.stringify(err,undefined,2));

                }
            });
       
        });

        router.delete('/:id',(req,res)=>{
            if(!ObjectId.isValid(req.params.id))
            return res.status(400).send('No record with given id:',$(req.params.id));
            Announcement.findByIdAndRemove(req.params.id,(err,doc)=>{

                if(!err){
                    res.send(doc);
                }
                else{
                    console.log('Error in Event Delete:'+JSON.stringify(err,undefined,2));

                }

            });
        
        });
       

       router.get('/',(req,res)=>{

       Announcement.find((err,docs)=>{
            if(!err){
                res.send(docs);
            }
            else
            {
                console.log('Error in retrieving Announcements'+JSON.stringify(err,undefined,2));
            }
       });
       });


      


module.exports = router;