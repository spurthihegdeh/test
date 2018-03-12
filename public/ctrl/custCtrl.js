var app = angular.module('clientRegister', []);
//const nodemailer = require('nodemailer');
app.controller('custControl', ['$scope','$http','$window','$location', function ($scope, $http, $window, $location) {
    
    
    var markers = [];
    var dis = [];
    var  initMap = function() {
        var map;
       
        var bangalore = { lat: 12.97, lng: 77.59 };
        var bounds = new google.maps.LatLngBounds(bangalore);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (p) {
                var LatLng = new google.maps.LatLng(p.coords.latitude, p.coords.longitude);
                var mapOptions = {
                mapTypeId: 'roadmap',
                mapTypeControl: false,
                disableDefaultUI: true,
                zoom:7,
                minZoom: 1,
                center:LatLng,            
        };    
        
        // Display a map on the web page
        map = new google.maps.Map(document.getElementById("gmap_canvas"), mapOptions);          
        var mark = new google.maps.Marker({
            position: LatLng,
            map: map,
            title: "<div style = 'height:60px;width:200px'><b>Your location:</b><br />Latitude: " + p.coords.latitude + "<br />Longitude: " + p.coords.longitude
        });
        google.maps.event.addListener(mark, "click", function (e) {
            var infoWindow = new google.maps.InfoWindow();
            infoWindow.setContent(mark.title);
            infoWindow.open(map, mark);
        });
    
        // Multiple markers location, latitude, and longitude   
       
        var infoWindow = new google.maps.InfoWindow(), marker, i;
        
        var typeInfo = '';
        //var dist = 0;
        function distance(lat1, lon1, lat2, lon2, unit) {
            var radlat1 = Math.PI * lat1/180
            var radlat2 = Math.PI * lat2/180
            var theta = lon1-lon2
            var radtheta = Math.PI * theta/180
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            dist = Math.acos(dist)
            dist = dist * 180/Math.PI
            dist = dist * 60 * 1.1515
            if (unit=="K") { dist = dist * 1.609344 }
            if (unit=="N") { dist = dist * 0.8684 }
            return dist
        }
        

        function arrayMin(dis) {
            var len = dis.length, min = Infinity;
            var pos=len-1;
            if(dis.length >0){
                min = dis[len-1].minDis;
                pos=len-1;
            }else 
                return '';

            while (len--) {
              if (dis[len].minDis < min) {
                min = dis[len].minDis;
                pos = len;
              }
            }
            return dis[pos];
          };

        // function arrayMin(dis) {
        //     var len = dis.length, min = Infinity;
        //     while (len--) {
        //       if (dis[len] < min) {
        //         min = dis[len];
        //       }
        //     }
        //     return min;
        //   };

          var disObj =function(userId,lat,lon,phn,minDis) {
              return obj={
              userId:userId,
              lat:lat,
              lon:lon,
              phn:phn,
              minDis:minDis
          }
        }
        var disArr = [];
        // Place each marker on the map
            for (i = 0; i < markers.length; i++) {
                
                var position = new google.maps.LatLng(markers[i].latitude, markers[i].longitude);
                dis[i] = distance(p.coords.latitude, p.coords.longitude,markers[i].latitude, markers[i].longitude);
                disArr.push(disObj(markers[i].name,markers[i].latitude,markers[i].longitude,markers[i].Runtime,dis[i]));
                
                if(markers[i].Domain=="EAE")
                    typeInfo = "../images/doctor.svg";
                else 
                    typeInfo = "../images/doctor.svg";;
                marker = new google.maps.Marker({
                    position: position,
                    icon:typeInfo,
                    map: map,                   
                    title: markers[i].name
                });
               
            // Add info window to marker    
            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {                   
                    infoWindow.setContent('<div><strong>' + markers[i].name + '</strong><br>' +
                    'Description: ' + markers[i].Description + '<br>' +
                    'ID: ' + markers[i].Domain + '<br>' +
                    'Phone: ' + markers[i].Runtime + '<br>'+
                    'Distance: '+ dis[i]  );
                    // infoWindow.setContent(uiContent('Testing','Description for this marker'));
                    infoWindow.open(map, marker);
                }
            })(marker, i));
            

            // Center the map to fit all markers on the screen
            // map.setZoom(5);
            //map.fitBounds(bounds);
            // 
        }
        $scope.call = function(){
            var dismin = arrayMin(disArr);
            $scope.minDistanceName =  dismin.userId 
            $scope.minDistancePhone =  dismin.phn;
                // alert(dismin.userId + "," + dismin.phn);
                

        }
        $scope.mail = function(){        

            /* nodemailer.createTestAccount((err, account) => {
    
            let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
             secure: false, // true for 465, false for other ports
            auth: {
                 user: account.user, // generated ethereal user
                pass: account.pass // generated ethereal password
             }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: 'bar@example.com, baz@example.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

       
    });
}); */
            alert("mail sent to the doctor");
        }


        
        /* var dismin = arrayMin(disArr);
        
                alert(dismin.userId); */
               
            
        // Set zoom level
        var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function (event) {
            this.setZoom(12);
            google.maps.event.removeListener(boundsListener);
        });
        //var r=geolib.findNearest(LatLng, markers, 1);
        //alert(r);
        
        
    });
}
    }
    
    // Load initialize function
    $scope.sendEmail = function()
{
       //alert("Hello");
       alert("The message was sent!");
       console.log($scope.cust);

       $http({
           method : 'POST',
           url : '/customer/send-email',
           data: $scope.cust
       }).then(function (result) {
           //alert(result.data.message);
           //if(result.data.success)
            //   $scope.location = 'http://www.google.com';
           // console.log("Data added");
           // alert('Added the item to database');
           alert("The message was sent!");
           $window.location.href = "http://www.tutorialsteacher.com/angularjs/angularjs-routing";
           // $window.location.href = "/index1.html";
            //http://localhost:3000/index1.html
            //$location.path('/index1.html');
           
       }, function (error) {
          console.log(error);
          alert("The message was sent!");
   });
   
}



    function getCustomers (){
        $http({
            method : 'GET',
            url : '/customer'
           
        }).then(function (result) {
            markers = result.data;
            console.log(markers);
            //alert('hello');
            google.maps.event.addDomListener(window, 'load', initMap());
            
            //  alert('Added the item to database');
            // $window.location.href = "http://www.tutorialsteacher.com/angularjs/angularjs-routing";
            // // $window.location.href = "/index1.html";
            //  //http://localhost:3000/index1.html
            //  //$location.path('/index1.html');

            // console.log(result);
            
        }, function (error) {
           console.log(error);
           alert('Error during registration');
    });
    }

    getCustomers();

}]);
