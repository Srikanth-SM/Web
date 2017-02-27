       console.log("inside onload");
         function openCamera(selection) {

                var srcType = Camera.PictureSourceType.CAMERA;
                var options = setOptions(srcType);


                navigator.camera.getPicture(cameraSuccess, cameraError, options);
           }
            function cameraError(error) {
                console.log("camera Error");

                console.debug("Unable to obtain picture: " + error, "app");

            }

            function cameraSuccess(imageUri) {
                console.log("cameraSuccess");

                displayImage(imageUri);
                // You may choose to copy the picture, save it somewhere, or upload.
                var html='<div id="imageFile"><p> <img src='+imageUri+'> </div>';
                $("#img").html(html);

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