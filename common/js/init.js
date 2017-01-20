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
