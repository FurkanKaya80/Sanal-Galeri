var http = require('http');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var db = require('./models/db');
var mongoose = require('mongoose');
var expressSession = require('express-session');
var connectMongo = require('connect-mongo');


app.use(express.static('./fütürizm'));

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'/views'));

app.use('/', express.static(path.join(__dirname, '../PROJE')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var mongoStore = connectMongo;

app.use(expressSession({
    resave: false,
    saveUninitialized: true,
    secret: 'testediyorum',
    store: mongoStore.create({  mongoUrl: 'mongodb://127.0.0.1/Proje'})
}));

//DISPLAY LINK middleware
 app.use((req,res,next)=>{
  var {userId} = req.session
   if(userId) {
       res.locals = { displayLink: true };
   }
   else{
    res.locals = {  displayLink: false };
    
   }
   next();
});




var route1 = require('./Routers/girisRoutes'); 
app.use('/giris', route1);
    
var route = require('./Routers/loginRoutes');
app.use('/login', route);

var route = require('./Routers/anaindexRoutes');
app.use('/', route);


var route = require('./Routers/cubismRoutes');
app.use('/Kubizm', route);

var route = require('./Routers/minimalizmRoutes');
app.use('/Minimalist', route);

var route = require('./Routers/dadaizmRoutes');
app.use('/Dadaist', route);

var route = require('./Routers/popartRoutes');
app.use('/Pop-Art', route);

var route = require('./Routers/surrealizmRoutes');
app.use('/Surrealizm', route);

var route = require('./Routers/ekspresyonizmRoutes');
app.use('/Ekspresyonist', route);

var route = require('./Routers/logoutRoutes');
app.use('/logout', route);

var route = require('./Routers/futurizmRoutes');
const kullanici = require('./models/kullanici');
const MongoStore = require('connect-mongo');
const req = require('express/lib/request');
app.use('/Futurizm', route);

app.listen(8080);