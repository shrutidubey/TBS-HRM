const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/logodatabase');

var Logo = new LogoSchema(
    { img: 
        { data: Buffer, contentType: String }
    }
  );

const Logo = module.exports = mongoose.model('Logo', LogoSchema);
module.exports.getUserById = function (id, callback) {
    Logo.findById(id, callback);
}

module.exports.getUserByUsername = function (username, callback) {
    console.log("inside main get user by username function"+username);
    const query = { username: username}
    console.log({ username: username})
    Logo.findOne(query, callback);

}

module.exports.getUserByDob = function (month, callback) {
    console.log("inside user.js"+month);
    const query = { month: month}
    console.log({ month:month})
    Logo.find(query, callback);

}

module.exports.getUserByEmail = function(email,callback){
    console.log("inside getUserByUsername functio"+email);
    const query = {email:email}
    Logo.find(query,callback)
}

module.exports.getUserByUsernames = function (username, callback) {
    console.log("inside main get user by username function"+username);
    const query = { username: username}
    console.log({ username: username})
    Logo.find(query, callback);

}

module.exports.addUser = function (newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            console.log("original password"+newUser.password);
            newUser.password = hash;
            console.log("new password"+newUser.password);
            newUser.save(callback);
        });
    });
}

module.exports.editUser = function(newUser,callback){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
            newUser.password = hash;
        
        });
    });
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
        if (err)
             throw err;
        callback(null, isMatch);
 
    });
}


 UserSchema.pre('save',function(next){
     var user = this;
     var SALT_FACTOR = 5;

     if(!user.isModified('password'))
     return next();


     bcrypt.genSalt(SALT_FACTOR,function(err,salt){
         if(err)
         return next(err);


        bcrypt.hash(user.password,salt,null,function(err,hash){
            if(err)
            return next(err);
            user.password = hash;
            next();
        });
     });












 })