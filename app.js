const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');
//const CaballeroRouter = require('./routes/Caballeros');
const {dbConnection} = require('./db/db')


const app = express();
dbConnection();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//rutas
app.use('/', require('./routes/RutasWeb'));
app.use('/caballeros', require('./routes/Caballeros'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true
}))


//app.use('/', indexRouter);
//app.use('/api', apiRouter);
//app.use('/caballero', CaballeroRouter);


module.exports = app;
