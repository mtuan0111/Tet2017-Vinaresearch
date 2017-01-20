
$(window).load(function(){
    // alert(123);
    var wheel = new Wheel();
    wheel.clickToPlay();

    var notiBroad = new notificationBroad($(".broad-obs.small"));
    $(document).on("click",".loginButton",function(){
        notiBroad.setLoginForm();
    })

})

$(document).on("click",".bottomMenu a",function(){
    // console.log($(this).data('page-target'));
    var page_target = $(this).data('page-target')
    $("#circle-world").attr("class",page_target);
})