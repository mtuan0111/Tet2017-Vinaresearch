$(document).ready(function(){
    var wheel = new Wheel();
    // wheel.rotate();
})

$(document).on("click",".bottomMenu a",function(){
    // console.log($(this).data('page-target'));
    var page_target = $(this).data('page-target')
    $("#circle-world").attr("class",page_target);
})