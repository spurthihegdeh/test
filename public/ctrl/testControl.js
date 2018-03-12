var app = angular.module('clientRegister', []);

app.controller('testControl', ['$scope', '$http', '$window', '$location', function ($scope, $http, $window, $location) {

    $scope.cust = {};
    google.maps.event.addDomListener(window, 'load', function () {
        var places = new google.maps.places.Autocomplete(document.getElementById('txtPlaces'));
        google.maps.event.addListener(places, 'place_changed', function () {
            var place = places.getPlace();
            $scope.cust.place = place.formatted_address;

            $scope.cust.latitude = place.geometry.location.lat();
            $scope.cust.longitude = place.geometry.location.lng();
            var mesg = "Address: " + place;
            mesg += "\nLatitude: " + place.geometry.location.lat();
            mesg += "\nLongitude: " + place.geometry.location.lng();
            //alert($scope.cust.longitude);

        });
    });
   
    /* $scope.file_changed = function(element) {
        
        $scope.$apply(function(scope) {
            // $scope.filename  =  element.files[0];
            console.log(element.files[0]);
            $http({
                method: 'POST',
                url: '/images/upload',
                enctype:'multipart/form-data',
                // data: $scope.cust,
                files:element.files[0]
        }).then(function (result) {
                    alert(result);
                    //if(result.data.success)
                    //   $scope.location = 'http://www.google.com';
                    // console.log("Data added");
                    alert('Added the item to database');
                    // $window.location.href = "http://www.tutorialsteacher.com/angularjs/angularjs-routing";
                    // $window.location.href = "/index1.html";
                    //http://localhost:3000/index1.html
                    //$location.path('/index1.html');

                }, function (error) {
                    console.log(error);
                    alert('Error during registration');
                });
        });
   }; */
    // function myFunction() {
    //     var x = document.createElement("INPUT");
    //     x.setAttribute("type", "image");
    //     x = document.getElementById("myImage");

    // }
    $scope.onFileSelect = function (files) {
        alert('started');

        if  (angular.isArray(files)) {
           
            for (var  i = 0;  i <  files.length;  i++) {
                file  =  files[i];
                if  ((file.type  ===  'image/jpeg')  ||  (file.type  ===  'image/png')) {
                    // console.log('File name: ');
                    //$scope.upload.contentType = file.type;
                    //$scope.upload.filename = file.name;
                    if (file.size  >  1048576) {
                        alert(file.name  +  ' size exceeds more than 1 MB ');
                        return;
                    }
                }
                else  {
                    alert(file.name + ' invalid image');
                    return;
                }
            }
            $scope.filename  =  files;
            alert('uploading');
            
        }
    }

        $scope.send = function () {
            //alert("Hello");

            console.log($scope.cust);

            $http({
                method: 'POST',
                url: '/html/clientRegister',
                data: $scope.cust,
                //files:$scope.filename
        }).then(function (result) {
            console.log(result);
                   // alert(result);
                    //if(result.data.success)
                    //   $scope.location = 'http://www.google.com';
                    // console.log("Data added");
                    alert('Added the item to database');
                    $window.location.href = "http://www.tutorialsteacher.com/angularjs/angularjs-routing";
                    // $window.location.href = "/index1.html";
                    //http://localhost:3000/index1.html
                    //$location.path('/index1.html');

                }, function (error) {
                    console.log(error);
                    alert('Error during registration');
                });
       }

    }]);
