var express = require('express');
var router = express.Router();
var customer = require('../model/customer.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/html/clientRegister', function(req,res)
{
  var customerInfo= new customer();
  customerInfo.name= req.body.name;
  customerInfo.Description= req.body.Description;
  //customerInfo.logo= req.body.logo;
  customerInfo.Domain= req.body.Domain;
  customerInfo.Runtime= req.body.Runtime;
  //customerInfo.ICLevel= req.body.ICLevel;
  customerInfo.place= req.body.place;
  customerInfo.latitude= req.body.latitude;
  customerInfo.longitude= req.body.longitude;

//customerInfo.save(function(err){
  
  //res.json('hehehe -Error saving in database');
//});

customerInfo.save()
.then(item => {
res.send("item saved to database");
})
.catch(err => {
res.status(400).send("unable to save to database");
});
});
module.exports = router;
