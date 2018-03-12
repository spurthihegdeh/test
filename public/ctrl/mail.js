$scope.call1 = function(){
const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'thisdavejdemo@gmail.com',
        pass: 'myGmailPassword',
    },
});
const mailOptions = {
    from: 'thisdavejdemo@gmail.com',
    to: 'thisdavejdemo@gmail.com',
    subject: 'hello world!',
    html: 'hello world!',
};
transport.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    }
    console.log(`Message sent: ${info.response}`);
});}