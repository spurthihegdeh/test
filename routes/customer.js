var express = require('express');
var router = express.Router();
// var customer = require('../model/customer.js');
var customerVar=require('../model/customer.js');
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req,res){
    customerVar.find({}, function(err,customer){ //customer is a variable that is connected to schema
    if (err)
    {
    res.send('something is really wrong!!');
    next();
    }
    res.json(customer);
    });
    });  

router.get('/custData',function(req,res){
    res.json('Customer Data getting');
})
router.post('/send-email', function(req,res){
       
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        //secure: false,
        port: 25,
        auth: { 
        user: 'serveonalert@gmail.com',
        pass: 'testpassword'
        },
        tls: {
        rejectUnauthorized: false
        }
        });
      
       let HelperOptions = {
        from: '"Need Alert" <serveonalert@gmail.com>',
        to: 'serveonalert@gmail.com',
        subject: 'Immediate Action Required',
        text: 'You need to collect information'
        };
      
      
        transporter.sendMail(HelperOptions, (error, info) => {
            if(error)
            {
            return console.log(error);
            }
            Console.log("The message was sent!");
            alert("The message was sent!");
            Console.log(info);
            });
            
});




module.exports = router;