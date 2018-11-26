const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
var ObjectId = require('mongoose').Types.ObjectId;
var nodemailer = require('nodemailer');
let mongoose = require('mongoose');

//const config4 = require('./config/logodatabase')
//mongoose.connect('mongodb://127.0.0.1:27017/files');
//let conn = mongoose.connection;

mongoose.connect('mongodb://localhost:27017/logodatabase');
let conn = mongoose.connection;
let multer = require('multer');
let GridFsStorage = require('multer-gridfs-storage');
let Grid = require('gridfs-stream');
Grid.mongo = mongoose.mongo;
let gfs = Grid('mongodb://localhost:27017/logodatabase');

let storage = GridFsStorage({
    url: 'mongodb://localhost:27017/logodatabase',
    gfs : gfs,

    filename: (req, file, cb) => {
        let date = Date.now();
        // The way you want to store your file in database
        cb(null, file.fieldname + '-' + date + '.'); 
    },
    
    // Additional Meta-data that you want to store
    metadata: function(req, file, cb) {
        cb(null, { originalname: file.originalname });
    },
    root: 'ctFiles' // Root collection name
});

// Multer configuration for single file uploads
let upload = multer({
    storage: storage
}).single('file');

// Route for file upload
router.post('/upload', (req, res) => {
    upload(req,res, (err) => {
        if(err){
             res.json({error_code:1,err_desc:err});
             return;
        }
        res.json({error_code:0, error_desc: null, file_uploaded: true});
    });
});

// Downloading a single file
router.get('/file/:filename', (req, res) => {
    gfs.collection('ctFiles'); //set collection name to lookup into

    /** First check if file exists */
    gfs.files.find({filename: req.params.filename}).toArray(function(err, files){
        if(!files || files.length === 0){
            return res.status(404).json({
                responseCode: 1,
                responseMessage: "error"
            });
        }
        // create read stream
        var readstream = gfs.createReadStream({
            filename: files[0].filename,
            root: "ctFiles"
        });
        // set the proper content type 
        res.set('Content-Type', files[0].contentType)
        // Return response
        return readstream.pipe(res);
    });
});

// Route for getting all the files
router.get('/files', (req, res) => {
    let filesData = [];
    let count = 0;
    gfs.collection('ctFiles'); // set the collection to look up into

    gfs.files.find({}).toArray((err, files) => {
        // Error checking
        if(!files || files.length === 0){
            return res.status(404).json({
                responseCode: 1,
                responseMessage: "error"
            });
        }
        // Loop through all the files and fetch the necessary information
        files.forEach((file) => {
            filesData[count++] = {
                originalname: file.metadata.originalname,
                filename: file.filename,
                contentType: file.contentType
            }
        });
        res.json(filesData);
    });
});

module.exports = router