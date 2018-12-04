const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/announcement');

const AnnouncementSchema = mongoose.Schema({
  announcement:{
      type:String
  }


});

const  Announcement= module.exports = mongoose.model('Announcement', AnnouncementSchema);
module.exports.getEventById = function (id, callback) {
    User.findById(id, callback);
}

module.exports.getAnouncementByAnnouncementname = function (announcement, callback) {
    const query = { announcement: announcement }
    User.findOne(query, callback);
}

module.exports.addAnnouncement = function (newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {

            newUser.password = hash;
            newUser.save(callback);
        });
    });
}
