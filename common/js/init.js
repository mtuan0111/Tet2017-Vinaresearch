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
      arr[i].onload = function(){
        console.log("loaded: " + count);
      }

    }
    // arr.forEach(function(element) {
    //     console.log(element);
    // });
})

document.ondrag = function(event) {
    console.log(1);
};

$(window).load(function(){
    var wheel = new Wheel();
    wheel.clickToPlay();
    var notiBroad = new notificationBroad($(".broad-obs.small"));
    $(document).on("click",".loginButton",function(){
        notiBroad.setLoginForm();
    });
})
