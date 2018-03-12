var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');




var index = require('./routes/index');
var customer = require('./routes/customer');
var images = require('./routes/imagefile');
var users = require('./routes/users');
var customerVar=require('./model/customer.js');
var app = express();

// view engine setup
app.engine('html',require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/PORTAL',function(error)
{
  if (error)
  {
    console.log("error");
  }
});
/* app.get('/viewall', function(req,res) {
  Product.find({}, function(err, prts) {
  console.log("\nportal !");
  console.log(prts); 
  renderResult(res, prts, "Portal List from MongoDB :");
});});

function renderResult(res, prts, msg) {
res.render('./public/html/display.html', {message:msg, PORTAL:prts},
  function(err, result) {
    if (!err) {res.end(result);}
    else {res.end('Oops ! An error occurred.');
      console.log(err);}
});} */
 /* app.get('/customers',(req , res) =>{
  db.collection('customer').find().toArray(function(err , i){
      if (err) return console.log(err)

      res.render('index.html',{customer: i})  
   })
});  */
 
  /* app.get('/customers', function(req,res){
    customerVar.find({}, function(err,customer){ //customer is a variable that is connected to schema
    if (err)
    {
    res.send('something is really wrong!!');
    next();
    }
    res.json(customer);
    //res.render('index.html',{customers})
    });
    }); */
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/customer',customer);
app.use('/users', users);
app.use('/images',images);  

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
