const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/holidaydatabase');

const HolidaySchema = mongoose.Schema({

    fromdate: {
        type:Date,
        required:true

    },
    todate: {
        type: Date,
        required: true,
    },
    holidayname: {
        type: String,
        required: true
    },

    duration: {
        type: String,
       // required: true,
    },
  
});

const Holiday = module.exports = mongoose.model('Holiday', HolidaySchema);
module.exports.getHolidayById = function (id, callback) {
    User.findById(id, callback);
}

module.exports.getHolidayByHolidayname = function (username, callback) {
    const query = { username: username }
    User.findOne(query, callback);
}

module.exports.addHoliday = function (newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {

            newUser.password = hash;
            newUser.save(callback);
        });
    });
}
