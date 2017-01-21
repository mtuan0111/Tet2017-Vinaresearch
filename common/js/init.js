$(document).ready(function(){

    var hashPage = window.location.hash.split("#")[1]
    if (hashPage){
        var targetPage = $("#circle-world .page-" + hashPage)[0];
        if(targetPage){
            $("#circle-world").attr("class",hashPage);
        };
    }

    $(document).on("click",".bottomMenu a",function(){
        // console.log($(this).data('page-target'));
        var page_target = $(this).data('page-target')
        $("#circle-world").attr("class",page_target);
    });

    // console.log($("*").length);
    var arr = document.getElementsByTagName("img");
    console.log(arr);
    var arrCount = arr.length;
      // typeof(arr)
    // console.log(typeof(arr));
    // console.log(arr);
    var count = 0
    for(var i=0; i<arrCount ;i++){
      // console.log(arr[i])
      count++ ;
      // arr[i].onload = function(){
      //   console.log("loaded: " + count);
      // }
      $(arr[i]).load(function(){
        console.log("loaded: " + count);
      })
    }
    // arr.forEach(function(element) {
    //     console.log(element);
    // });
})

var angleDrag = 0;
document.ondrag = function(event) {
    if((event.x-angleDrag)!=0){
        console.log(event.x-angleDrag);
        angleDrag = event.x;


        $({
            deg: current_deg
        }).animate({
            deg: deg_rotate
        }, {
            duration: rotate_duration,
            easing: "easeOutQuart",
            specialEasing: "easeOutQuart",
            step: function(now) {
                elem.css({
                    '-webkit-transform': "rotate(" + now + "deg)",
                    '-moz-transform': "rotate(" + now + "deg)",
                    '-ms-transform': "rotate(" + now + "deg)",
                    '-o-transform': "rotate(" + now + "deg)",
                    'transform': "rotate(" + now + "deg)"
                });
                //- elem.style.transform="rotate(" + now + "deg)";
            },
            done: function() {
                $(document).on('click', "#rotate-wheel", function() {
                    wheel_action(200);
                });
                //- console.log(point_peace);
                $(".point-result").attr("data-score", points_array[point_peace]);
                //- console.log(get_current_rotate("rotate-wheel"));
            },
        });


    }
    else{}

    event.preventDefault();
    return false;
};

$(window).load(function(){
    var wheel = new Wheel();
    wheel.clickToPlay();
    var notiBroad = new notificationBroad($(".broad-obs.small"));
    $(document).on("click",".loginButton",function(){
        notiBroad.setLoginForm();
    });
})
