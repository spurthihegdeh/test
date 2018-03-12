var express = require('express');
var router = express.Router();
var multer = require('multer');
var done = false;

var storage =
    multer({

        dest:'./public/upload',
        // filename: function (req, file, callback) {
        //     console.log('File name is :: '+file.fieldname);
        //     callback(null, file.fieldname)
        // }

        // onFileUploadComplete: function (file) {
        //     fName = file;
        //     console.log(file.fieldname + ' uploaded to  ' + file.path)
        //     console.log("File name: "+fName);
        //     if (actFName == '')
        //         actFName = file.path
        //     // else if(fs.existsSync(actFName))
        //     //   fs.unlinkSync(actFName);
        //     console.log('File uploaded.....');
        //     done = true;
        // },
        // onError: function (error, next) {
        //     console.log('Error during upload: ' + error);
        // }
    })
// var upload = multer({ storage: storage }).single('files');
// router.use(multer({dtest: './public/upload',
//     rename: function (fieldname, filename) {
//         fName = filename;
//         console.log('Filename: '+fName);
//     return fName;
//     },

//     onFileUploadComplete: function (file) {
//      fName = file;
//       console.log(file.fieldname + ' uploaded to  ' + file.path)
//     // console.log("File name: "+fName);
//     if(actFName=='')
//       actFName = file.path
//     // else if(fs.existsSync(actFName))
//     //   fs.unlinkSync(actFName);
//     console.log('File uploaded.....');
//       done=true;
//     },
//     onError: function(error,next){
//         console.log('Error during upload: '+error);
//     }
// }));

router.get('/', function (req, res) {
    console.log('default home page')
    res.send('no output');
});

router.post('/upload',storage.single('files'), function (req, res) {
    // var upload(req, res, function (err)
     {
         console.log('file:: '+req.files);
        console.log('Done');
       
        console.log('Uploaded the file');


        
            var bodyData = req.body.obj;
            var now = new Date();
            // upload = new imageData();
            // upload._id = mongoose.Types.ObjectId(req.body._id);
            // var imgPath = './public/upload/'+req.files.file.name;
            // type = req.files.file.mimetype;
            // upload.type = req.files.file.mimetype;
            // upload.files = fs.readFileSync(imgPath);
            // upload.save(function(err,data) {
            //     if (err)
            //         console.log(err)
            //     else {
            //         fs.unlinkSync(imgPath)
            //         //res.send('success');

            //         exp = new experiences();
            //         exp.namePerson = bodyData.namePerson;
            //         exp.email = bodyData.email;
            //         exp.review = 0;
            //         exp.images[0] = data._id;
            //         exp.save(function(err,doc){
            //             if(err)
            //                 console.log("Experiences saving error: "+ err);
            //             else {
            //                 res.send("success");
            //             }
            //         })
            //     }
            // })
            res.send('succeeded');
        
    }
})


module.exports = router;
