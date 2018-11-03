const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/leavedatabase');

const LeaveSchema = mongoose.Schema({
   empname: {
        type: String,

    },

    leavetype: {
        type: String,
        required: true,
    },
    fromdate: {
        type: Date,
        required: true
    },

    todate: {
        type: Date,
        required: true,
    },
    leavereason: {
        type: String,
        required: true
    },
    leavecount: {
        type: Number,
        default: 18
    },
    status: {
        type: String
    },
    acceptedleaves:{
        type:String
    }
});

const Leave = module.exports = mongoose.model('Leave', LeaveSchema);


module.exports.getById = function (id, callback) {
    Leave.findById(id, callback);
}

module.exports.getUserByUsername = function (empname, callback) {
    const query = { empname: empname }
    Leave.find(query, callback);
}
