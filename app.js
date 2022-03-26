const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const ejs = require('ejs');
const { APP_PORT, DB_HOST, SECRET_KEY } = require("./config")
const { Router }= require("./routes"); 
 require("./database");
 const cookieParser = require("cookie-parser")
 
const app = express();

//session congigration files includes
const session = require("express-session");
const flash = require('express-flash');
const MongoStore = require("connect-mongo")

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());

// session config
app.use(session({
  secret:SECRET_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 24},
  store : MongoStore.create({
    mongoUrl: DB_HOST,
    collection : "session"
  })
}))
//flash session
app.use(flash());

// set template engine
app.use('/publics',express.static(path.join(__dirname, '/publics')));
app.set('views', path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');

app.use(Router)
app.listen(APP_PORT, () => console.log(`server is connecting on port = ${APP_PORT}`));