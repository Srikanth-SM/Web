

function generateButtons(){

}
function getXml(type){

    console.log("inside getXml");

    // $(this).load("result.html");
    // window.open("result.html");
    var requestURL=category[type];

    var request = new XMLHttpRequest();

    request.open("GET", requestURL, false);
    request.send();
    var xml = request.responseXML;
    var img = new Image();
    // img.src = 'https://i.ytimg.com/vi/zecueq-mo4M/maxresdefault.jpg';

    // document.body.appendChild(img);
    var items=xml.getElementsByTagName("item");
    var html = '';
    html+='<div class="container">';
    html+='<div class="row "style=""><h3><strong>'+type+'</strong></h3></div>';
    // html+='<ul';

    for(var i=0;i<items.length;i++){


        if(items[i].children.length>5) {

            // html+='<div class="row "style="float: right; position: relative" >';
            // html+='<div class="col-sm-6 col-md-4 col-lg-4 well news" style="float:left;position:relative;">';
            // html+='<div class="well">';
            html += '<div class="col-sm-6 col-md-4 col-lg-4 " > ';
            html+='<div id="well" class="row well" style="margin: 1em;"><img  img-responsive center-block src='+'"'+items[i].children[3].attributes[0].nodeValue+'"'+ ' alt="" style="width:200px;max-height:200px">' +
                '<div class="row" ><h5>' + items[i].children[0].textContent + ' </h5></div>' +
                ''+'<div class="row"><h5>' + items[i].children[2].textContent + ' </h5></div>' +
                '<div class="row">' + getTimes(items[i].children[4].textContent.slice(0, items[i].children[4].textContent.length - 6)) + '</div>' ;
            html += '</div></div>';


        }
        else{

            html+='<div class="col-sm-6 col-md-4 col-lg-4">';
            // html += '<div class="col-lg-4"><img   alt="image" style="width:auto;height:auto";> </div>';
            html+='<div id="well" class="row well" style="margin: 1em;">';
            html += '<div class="row"><h5>' + items[i].children[0].textContent + ' </h5></div><div class ="row"><h5>' + items[i].children[2].textContent + ' </h5></div>';
            html += '<div class="row">' + getTimes(items[i].children[3].textContent.slice(0, items[i].children[3].textContent.length - 6))+ '</div>';
            html += '</div></div>';
        }

        // break;

    }



    html+='</div>';
    // console.log(this);

    // console.log(html);
    // window.location=("result.html");
    // con.log($(document));
    // document.write($(document));


    $("body .update").html(html)

    html="";
}
function getTimes(time){
    console.log("time "+time);
    var s=time.split(" ");
    console.log("s="+s);
    var hours=s[s.length-1].split(":")[0];
    var last=hours>=12?'PM':'AM';
    hours=hours>12?hours%12:hours;
    var minutes=s[s.length-1].split(":")[1];
    hours=s[0]+" "+s[1]+" "+s[2]+" "+hours+':'+""+minutes+" "+last;
    console.log(hours);
    return hours;
}






/* for the result.html */
// html+='</div>';
//     var images=xml.getElementsByTagName("media:thumbnail");
//     var users = xml.getElementsByTagName("description");
//     var pubdates=xml.getElementsByTagName("pubDate");
//     var html = '<div class="rows" ><br></div>';
//     html+="<h3><strong>"+type+" "+"News"+"</strong></h3>"+"<br>"
//
//     for (var i = 0; i < pubdates.length; i++) {
//         html+='<div class="col-lg-4"> <img src='+images[i]+' alt="Mountain View" style="width:10em;height:10em";> </div>';
//         var temp=pubdates[i].childNodes[0].nodeValue;
//         // html+="<div class='row'><div class='col-lg-4'>";
//         // html+="<img src=''"
//
// //                console.writeln(html);
//     };

// global=html;
// console.log(global);
// $("#update").removeClass("content");
// $("#update").addClass("content");
// $(".content").append(html);
// $(".body .content").append("saurav");
function getURL() {
    var url=document.URL;
    console.log(url);

}



// </script>