$(document).ready(function(){
    var _this = this;
    var hashPage = window.location.hash.split("#")[1];
    var currentPage = hashPage;
    if (hashPage){
        var targetPage = $("#circle-world .page-" + hashPage)[0];
        if(targetPage){
            $("#circle-world").removeClass((currentPage == hashPage)?"":currentPage).addClass(hashPage);
        };
    }
    else{
      $("#circle-world").addClass("C");
    }

    $(document).on("click",".bottomMenu a",function(){
        var page_target = $(this).data('page-target')
        $("#circle-world").removeClass((currentPage == page_target)?"":currentPage).addClass(page_target);
        currentPage = page_target;
    });


    // $(document).on("mousedown",'#wrapper',function(e){
    //     // alert(1);
    //     var angleDrag = 0;
    //     var elemRotate = document.getElementById("circle-world");
    //     var toRotated = get_current_rotate("circle-world");

    //     $(this).on("mouseover",function(e){
    //         if(angleDrag != 0){
    //             // console.log(e.pageX - angleDrag)
    //             toRotated = elemRotate + e.pageX - angleDrag;
    //         }
    //         console.log("toRotated: ", toRotated);
    //         angleDrag = e.pageX;
    //         $(elemRotate).css({
    //             '-webkit-transform': "rotate(" + toRotated + "deg)",
    //             '-moz-transform': "rotate(" + toRotated + "deg)",
    //             '-ms-transform': "rotate(" + toRotated + "deg)",
    //             '-o-transform': "rotate(" + toRotated + "deg)",
    //             'transform': "rotate(" + toRotated + "deg)"
    //         });
    //     })

    //     $(this).on("mouseup",function(e){
    //         $(this).off("mouseover");
    //     });

    //     $(this).on("mouseout",function(e){
    //         $(this).off("mouseover",function(){
    //             alert(123);
    //         });
    //     });

    // });


    // console.log($("*").length);
    // var arr = document.getElementsByTagName("img");
    // console.log(arr);
    // var arrCount = arr.length;
    //   // typeof(arr)
    // // console.log(typeof(arr));
    // // console.log(arr);
    // var count = 0
    // for(var i=0; i<arrCount ;i++){
    //   // console.log(arr[i])
    //   count++ ;
    //   // arr[i].onload = function(){
    //   //   console.log("loaded: " + count);
    //   // }
    //   $(arr[i]).load(function(){
    //     console.log("loaded: " + count);
    //   })
    // }
    // arr.forEach(function(element) {
    //     console.log(element);
    // });
})

// var angleDrag = 0;
// var elemRotate = document.getElementById("circle-world");

// document.ondrag = function(event) {
//     var currentDeg = get_current_rotate("circle-world");
//     if(((event.x-angleDrag)!=0) && (event.x!=0)){
//         console.log(event.x-angleDrag);

//         var toRotated = currentDeg + (event.x - angleDrag)*5;
//         console.log("currentDeg: ", currentDeg);
//         console.log("event.x: ", event.x);
//         console.log("angleDrag: ", angleDrag);
//         $(elemRotate).css({
//             '-webkit-transform': "rotate(" + toRotated + "deg)",
//             '-moz-transform': "rotate(" + toRotated + "deg)",
//             '-ms-transform': "rotate(" + toRotated + "deg)",
//             '-o-transform': "rotate(" + toRotated + "deg)",
//             'transform': "rotate(" + toRotated + "deg)"
//         });
//         angleDrag = event.x;
//     }
//     else{}

//     event.preventDefault();
//     return false;
// };

$(window).load(function(){
    var wheel = new Wheel();
    wheel.clickToPlay();
    var notiBroad = new notificationBroad($(".broad-obs.small"));
    $(document).on("click",".loginButton",function(){
        notiBroad.setLoginForm();
    });
})

function get_current_rotate(id) {
    var el = document.getElementById(id);
    var st = window.getComputedStyle(el, null);
    var tr = st.getPropertyValue("-webkit-transform") ||
        st.getPropertyValue("-moz-transform") ||
        st.getPropertyValue("-ms-transform") ||
        st.getPropertyValue("-o-transform") ||
        st.getPropertyValue("transform") ||
        "FAIL";
    if (tr !== "none") {
        var values = tr.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var c = values[2];
        var d = values[3];

        var scale = Math.sqrt(a * a + b * b);
        var sin = b / scale;
        var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
        return angle;
    } else
     return 0;
};


$(function() {
    touchInit();
    // document.body.addEventListener('touchstart', function(e){
    //     console.log(e.changedTouches[0].pageX);
    // }, false)
})

var angleDrag = 0;
var elemRotate = document.getElementById("circle-world");
var currentDeg;
var prePoint;
function touchHandler(event)
{
    var touches = event.changedTouches,
        first = touches[0],
        type = "";
    switch(event.type)
    {
        case "touchstart": type = "mousedown"; break;
        case "touchmove":  type = "mousemove"; break;
        case "touchend":   type = "mouseup";   break;
        default:           return;
    }

    // initMouseEvent(type, canBubble, cancelable, view, clickCount,
    //                screenX, screenY, clientX, clientY, ctrlKey,
    //                altKey, shiftKey, metaKey, button, relatedTarget);

    var simulatedEvent = document.createEvent("MouseEvent");
    simulatedEvent.initMouseEvent(type, true, true, window, 1,
                                  first.screenX, first.screenY,
                                  first.clientX, first.clientY, false,
                                  false, false, false, 0/*left*/, null);

    first.target.dispatchEvent(simulatedEvent);
    console.log(type);
    console.log(first.pageX);
    // event.preventDefault();

    switch(type)
    {
        case "mousedown":
            currentDeg = get_current_rotate("circle-world");
            prePoint = first.pageX;
            // console.log()
            break;
        case "mousemove":
            console.log(first.pageX - prePoint);

            var toRotated = currentDeg + (first.pageX - prePoint)*2;
            $(elemRotate).css({
                '-webkit-transform': "rotate(" + toRotated + "deg)",
                '-moz-transform': "rotate(" + toRotated + "deg)",
                '-ms-transform': "rotate(" + toRotated + "deg)",
                '-o-transform': "rotate(" + toRotated + "deg)",
                'transform': "rotate(" + toRotated + "deg)"
            });


            prePoint = first.pageX;

          break;
        case "mouseup":
          break;
        default:
          return;
    }
}

// function touchHandler(event) {
//     var touch = event.changedTouches[0];
//     // var touch_sc = event.changedTouches[0];
//     // console.log(event.changedTouches);

//     var simulatedEvent = document.createEvent("MouseEvent");
//         simulatedEvent.initMouseEvent({
//         touchstart: "mousedown",
//         touchmove: "mousemove",
//         touchend: "mouseup"
//     }[event.type], true, true, window, 1,
//         touch.screenX, touch.screenY,
//         touch.clientX, touch.clientY, false,
//         false, false, false, 0, null);

//     touch.target.dispatchEvent(simulatedEvent);
//     // event.stopPropagation();
//     // event.preventDefault();
//     console.log(event);
//     console.log(touch);
// }

function touchInit() {
    var a = document.body;
    a.addEventListener("touchstart", touchHandler, true);
    a.addEventListener("touchmove", touchHandler, true);
    a.addEventListener("touchend", touchHandler, true);
    a.addEventListener("touchcancel", touchHandler, true);

    // var b = document.getElementById("footer");
    // b.addEventListener("touchstart", eStop, true);
    // b.addEventListener("touchmove", eStop, true);
    // b.addEventListener("touchend", eStop, true);
    // b.addEventListener("touchcancel", eStop, true);
}

function eStop(event){
    event.stopPropagation();
}


