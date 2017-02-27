/**
 * Created by srikanth.s on 2/10/17.
 */


var category = {
    Science:'https://rss.sciencedaily.com/top/science.xml',
    Health:' https://rss.sciencedaily.com/top/health.xml',
    Technology:' https://rss.sciencedaily.com/top/technology.xml',
    Environment:' https://rss.sciencedaily.com/top/environment.xml',
    Society:' https://rss.sciencedaily.com/top/society.xml',
    Offbeat:' https://rss.sciencedaily.com/strange_offbeat.xml',

};
app.controller('newsArticleDisplay', function ($scope,$location){
//    if(localStorage['article']){
    var ii=JSON.parse(localStorage['article'])||[];
    $scope.newsArticle=ii;
//    }
//    else{
//        $scope.newsArticle="There are no Articles to Display";
//    }
//    console.log(i);
//    for (var i=0;i<ii.length;i++ ){
//        $scope.newsArticle.push(ii[i]);
//        }
//        console.log($scope.newsArticle);

});

//app.controller('videoController',['$scope','video'function($scope,video){
//        video.addSource('mp4', 'http://www.example.com/alice-in-wonderland.mp4');
//}]);



app.controller("login", function ($scope,$location) {
    $scope.email = "";
    $scope.password = "";
    $scope.validate=function () {
        console.log($scope.email);
        //
        console.log("valid");
        //      // }
        //      // else {
        //      // //     console.log("invalid");
        //      // //
        //      // // }
        //      // // if (email.contains('@') && email.length > 5) {
        //      // console
        $location.path("/category" );
    }

    console.log("category");


});
app.controller("myButtons", function ($scope,$location) {
    console.log("inside myButtons controller");
    $scope.categories=category;
    // console.log($scope.categories);
    // $scope.keys=$scope.getKeys(category)
    $scope.getKeys=function(){
        var l=[]
        for(i in $scope.categories){
            l.push(i)}return l
    };
    $scope.displayCategory=function(type)
    {

        $scope.val=type;
        // $location.path('/category').search({type: $scope.val})
        // $location.path().search($scope.val);
        $location.path('/category/'+$scope.val);
        // getXml(type);
        // $location.path("/?$scope.val");
    };



});

app.controller('addNewsController',function ($scope,$location,$http) {
navigator.geolocation.getCurrentPosition(
      function(position) {
          console.log(position.coords.latitude + ',' + position.coords.longitude);
      },
      function() {
          console.log('Error getting location');
      });
    console.log("Inside add news");
    $scope.flag=true;
    var news_article={};
    $scope.take_photo_From_Gallery=function(){
    console.log($scope.headLine);
      console.log("Inside camera")
      // document.addEventListener("deviceready", onDeviceReady, false);
      // function onDeviceReady() {
      //     console.log(navigator.Camera);


      var srcType = Camera.PictureSourceType.PHOTOLIBRARY;
      var options = setOptions(srcType);


      navigator.camera.getPicture(cameraSuccess, cameraError, options);}
        $scope.take_photo=function () {
        console.log($scope.headLine);
        console.log("Inside camera")
        // document.addEventListener("deviceready", onDeviceReady, false);
        // function onDeviceReady() {
        //     console.log(navigator.Camera);


        var srcType = Camera.PictureSourceType.CAMERA;
        var options = setOptions(srcType);


        navigator.camera.getPicture(cameraSuccess, cameraError, options);
        // }
    }
    function cameraError(error) {
        console.log("camera Error");

        console.debug("Unable to obtain picture: " + error, "app");

    }

    function cameraSuccess(imageUri) {
        console.log("cameraSuccess");
        console.log(imageUri);
        $scope.photo=imageUri;
        // You may choose to copy the picture, save it somewhere, or upload.
        var html='<div id="imageFile"><p> <img src='+imageUri+' width="100px" > </div>';
//                                      $("#img").html(html);
        displayImage(imageUri);

    }
    function displayImage(imgUri) {

        var elem = document.getElementById('imageFile');
        elem.src = imgUri;
    }

    function setOptions(srcType) {
        console.log("setOptions");

        var options = {
            // Some common settings are 20, 50, and 100
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,
            // In this app, dynamically set the picture source, Camera or photo gallery
            sourceType: srcType,
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.MediaType.PICTURE,
            allowEdit: true,
            correctOrientation: true  //Corrects Android orientation quirks
        }
        return options;
    }

 function onSuccess(position)
 {
    console.log("Inside Onsuccess");
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&sensor=true";
    $http.get(url)
        .then(function(result) {
            var address = result.data.results[2].formatted_address;
            console.log(address);
            $scope.address = address;
        });
    }
function onError(error) {
    alert('code: ' + error.code + '\n' +
    'message: ' + error.message + '\n');
        }


    $scope.submit_news=function () {
//         navigator.geolocation.getCurrentPosition(onSuccess, onError);
navigator.geolocation.getCurrentPosition(onPositionUpdate);

       function onPositionUpdate(position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            var urls = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&sensor=false";
            console.log(lat);
            $http({
                    method: 'GET',
                    url: urls
                }).then(function (success){
                        console.log(success);
//                    var address = result.data.results[2].formatted_address;
//                    $scope.address = address;
//                    console.log(address);
                });
        }
         $scope.flag=false;
        news_article.headline=$scope.headLine;
        news_article.name=$scope.name;
        news_article.description=$scope.description;
        news_article.date=$scope.datevalue;
        news_article.photo=$scope.photo;
        news_article.video=$scope.video;
        console.log(news_article.date);
        // news_article.date=$filter('news_article.date')(date, format, timezone)
        console.log(news_article.date);
        var old_news=JSON.parse(localStorage.getItem('article'))||[];
        if(news_article.name || news_article.description||news_article.headline){
            old_news.push(news_article);
            localStorage.setItem('article',JSON.stringify(old_news));
        }


        console.log(localStorage);
//        if($scope.flag==false){
        $scope.headLine="";
        $scope.name="";
        $scope.description="";
        $scope.datevalue="";
        $scope.photo="";
        $scope.video="";
        $location.path("/category/displayNewsArticle" );

//}
    }

    $scope.add_Video=function(){
        console.log("inside add_video");
        function captureSuccess(mediaFiles) {
            var i, len;
            console.log("capture success");
//                            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
//                                uploadFile(mediaFiles[i]);
            $scope.video=(mediaFiles[0].fullPath);
//                            }
//            video.addSource('mp4',mediaFiles[0].fullPath);

            console.log($scope.video);
        }

        // Called if something bad happens.
        //
        function captureError(error) {
            var msg = 'An error occurred during capture: ' + error.code;
            navigator.notification.alert(msg, null, 'Uh oh!');
        }

        // A button will call this function
        //
//                        function captureVideo() {
        // Launch device video recording application,
        // allowing user to capture up to 2 video clips
        $scope.video="";
        navigator.device.capture.captureVideo(captureSuccess, captureError, {limit: 1});
//                        }

        // Upload files to server
//                        function uploadFile(mediaFile) {
//                            var ft = new FileTransfer(),
//                                path = mediaFile.fullPath,
//                                name = mediaFile.name;
//
//                            ft.upload(path,
//                                "http://my.domain.com/upload.php",
//                                function(result) {
//                                    console.log('Upload success: ' + result.responseCode);
//                                    console.log(result.bytesSent + ' bytes sent');
//                                },
//                                function(error) {
//                                    console.log('Error uploading file ' + path + ': ' + error.code);
//                                },
//                                { fileName: name });
//                        }



    }

});


app.controller('geoLocation',function($scope,$http){


})

app.controller('newsDisplay', function ($scope,$location,$routeParams, $http){
    $scope.c='';
    console.log("inside newsDisplay controller");
    $scope.parameter = $routeParams;
    console.log("parameter=" + $scope.parameter.type);
    $scope.display = [];
    var x2js=new X2JS();
    $http({
        method: 'GET',
        url: category[$scope.parameter.type]
    }).then(function (success){

        var cc=x2js.xml_str2json(success.data).rss.channel.item;
        console.log("ccc="+cc);
        console.log("asdasdasdasd   "+success);/*x2js.xml_str2json(success.data).rss.channel.item[0]*/
        for(var i=0;i<cc.length;i++){
            $scope.display.push(cc[i]);
        }
    },function (error){
        console.log(error);

    });

});


// });














