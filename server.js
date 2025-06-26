var express = require('express');
var engine = require("ejs-mate");
var path = require('path');
var app = express();
var session = require('express-session');
var ejs = require('ejs');
var port = process.env.PORT || 3000;
var http = require('http');
var server = http.Server(app);
var bodyParser = require("body-parser");
var mongoStore = require("connect-mongo")(session);
const vehicleRoutes = require('./Routes/vehicle');
require("dotenv").config();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use('/vehicle', vehicleRoutes);
app.engine("ejs", engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Views'));   

app.use(express.static(path.join(__dirname,'/public')))

// DB //
const connectDB = require('./config/db');

/* Mongoose Connectopn */
var mongoose = require("mongoose");
var db = mongoose.connection;

app.use(express.urlencoded({extended: true}))
app.use(express.json())                 /*include express*/
app.use(session({
    secret: "xYzUCAchitkara",
    resave: false,
    saveUninitialized: false,
    store: new mongoStore({
      mongooseConnection: db
    })
}))

app.use('/',require('./Routes/'));

app.get('/', function(req,res) {
  res.render('login');
})

connectDB().then(() => {
  app.listen(port, () => {
    console.log('Running on port ' +port);
  });
});