const express = require('express');
const path = require('path');
const favicon = require('static-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const session = require('express-session');
const nodemailer = require('nodemailer');
const cors = require('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const async = require('async');
const crypto = require('crypto')
const config = require('./config/database');
const config1 = require('./config/database1');
const config2 = require('./config/leavedatabase');
const config3 = require('./config/holidaydatabase');
const routes = require('./models/user.js');
const routes1 = require('./models/event.js');
const routes2 = require('./models/leave.js');
const routes3 = require('./models/holiday');



var flash = require('connect-flash');
var JSAlert = require("js-alert");


empname = "test";
person = ["a"];
a="abc"
mongoose.connect(config.database);
mongoose.connect(config1.database1);
mongoose.connect(config2.leavedatabase);
mongoose.connect('mongodb://localhost:27017/holidaydatabase');

mongoose.connection.on('connected', () => {
    console.log('connected to database' + config.database)
});

mongoose.connection.on('error', (err) => {
    console.log(' database error' + config.database)
});
mongoose.connection.on('connected', () => {
    console.log('connected to database' + config1.database1)
});

mongoose.connection.on('error', (err) => {
    console.log(' database error' + config1.database1)
});

mongoose.connection.on('connected', () => {
    console.log('connected to database' + config2.leavedatabase)
});

mongoose.connection.on('error', (err) => {
    console.log(' database error' + config2.leavedatabase)
});

mongoose.connection.on('connected', () => {
    console.log('connected to database' + config3.holidaydatabase)
});

mongoose.connection.on('error', (err) => {
    console.log(' database error' + config3.holidaydatabase)
});

const app = express();

const users = require('./routes/users');
const user1 = require('./routes/user1');
const events = require('./routes/events');
const leaves = require('./routes/leave');
const adminleave = require('./routes/adminleave');
const adminrejectleave = require('./routes/adminrejectleave');
const getleavecount = require('./routes/getleavecount');
const leaves2 = require('./routes/leaves2');
const holidays = require('./routes/holidays');
const editprofile = require('./routes/editprofile');
const forgot = require('./routes/forgot');
const getuserbyemail = require('./routes/getUserByEmail');
const getusernames = require('./routes/getusernames')
const port = 9008;

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

/*
app.use(passport.initialize());
app.use(passport.session());

*/
require('./config/passport')(passport);


app.use('/users', users);
app.use('/events', events);
app.use('/leaves', leaves);
app.use('/adminleave', adminleave);
app.use('/user1', user1);
app.use('/adminrejectleave', adminrejectleave);
app.use('/leaves2',leaves2);
app.use('/holidays',holidays);
app.use('/editprofile',editprofile);
app.use('/forgot',forgot);
app.use('/getuserbyemail',getuserbyemail);
app.use('/getusernames',getusernames);
app.use(favicon());
app.use(logger('dev'));
app.use(cookieParser());
app.use(session({secret:'session secret key'}));
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded());



app.get('/', (req, res) => {
    res.send("Invalid endpoint");
});


app.listen(port, () => {
    console.log('Server started on port' + port);
});

passport.use(new LocalStrategy(function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) return done(err);
      if (!user) return done(null, false, { message: 'Incorrect username.' });
      user.comparePassword(password, function(err, isMatch) {
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Incorrect password.' });
        }
      });
    });
  }));

passport.serializeUser(function(user,done){
    done(null,user.id)
})

passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        done(err,user)
    });
});