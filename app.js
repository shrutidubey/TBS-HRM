const express = require('express');
const path = require('path');
const bodyParser  = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const config1 = require('./config/database1');
const config2 = require('./config/leavedatabase');
const routes = require('./models/user.js');
const routes1 = require('./models/event.js');
const routes2 = require('./models/leave.js');
mongoose.connect(config.database);
mongoose.connect(config1.database1);
mongoose.connect(config2.leavedatabase);
mongoose.connection.on('connected',()=>{
    console.log('connected to database'+config.database)
});

mongoose.connection.on('error',(err)=>{
    console.log(' database error'+config.database)
});
mongoose.connection.on('connected',()=>{
    console.log('connected to database'+config1.database1)
});

mongoose.connection.on('error',(err)=>{
    console.log(' database error'+config1.database1)
});

mongoose.connection.on('connected',()=>{
    console.log('connected to database'+config2.leavedatabase)
});

mongoose.connection.on('error',(err)=>{
    console.log(' database error'+config2.leavedatabase)
});

const app = express();

const users = require('./routes/users');
const events = require('./routes/events');
const leaves = require('./routes/leave');
const adminleave = require('./routes/adminleave');
const adminrejectleave = require('./routes/adminrejectleave');
const port = 9008;

app.use(cors({origin:'http://localhost:4200'}));
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());


app.use(passport.initialize());
app.use(passport.session());


require('./config/passport')(passport);


app.use('/users',users);
app.use('/events',events);
app.use('/leaves',leaves);
app.use('/adminleave',adminleave);
app.use('/adminrejectleave',adminrejectleave);

app.get('/',(req,res)=>{
    res.send("Invalid endpoint");
});


app.listen(port,()=>{
    console.log('Server started on port'+port);
});


