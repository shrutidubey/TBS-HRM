const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database1');

const EventSchema = mongoose.Schema({
    eventname: {
        type: String,

    },
    venue: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true
    },

    time: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    }


});

const Event = module.exports = mongoose.model('Event', EventSchema);
module.exports.getEventById = function (id, callback) {
    User.findById(id, callback);
}

module.exports.getEventByEventname = function (username, callback) {
    const query = { username: username }
    User.findOne(query, callback);
}

module.exports.addEvent = function (newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {

            newUser.password = hash;
            newUser.save(callback);
        });
    });
}
