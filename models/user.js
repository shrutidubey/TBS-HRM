const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const UserSchema = mongoose.Schema({
    name: {
        type: String,

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    gender:{
        type:String,
       
    },
    role:{
        type:String,
    }

});

const User = module.exports = mongoose.model('User', UserSchema);
module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
}

module.exports.getUserByUsername = function (username, callback) {
    console.log("inside main get user by username function"+username);
    const query = { username: username}
    console.log({ username: username})
    User.findOne(query, callback);

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
 