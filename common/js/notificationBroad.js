function notificationBroad(obs="") {
    var _this = this;
    _this.Obj = obs;
    _this.title = _this.Obj.find(".broad-title");
    _this.messageContent = _this.Obj.find(".notificationMessage");
    _this.slideUp();
}

// notificationBroad.prototype
notificationBroad.prototype.setTitle = function(stringTitle = "Khai Xuân Đón Lộc") {
    this.title[0].innerHTML = stringTitle;
}

notificationBroad.prototype.setContent = function(messageContent){
    this.messageContent.children().remove();
    this.messageContent.append(messageContent)
}

notificationBroad.prototype.setMessage = function(messageContent){
    var messageAppend = document.createElement("p");
    messageAppend.append(messageContent);

    this.setContent(messageAppend);
}

notificationBroad.prototype.setTakePoint = function(pointValue){
    var _this = this;
    _this.setTitle("Vòng quay");

    var messageAppend = document.createElement("p");
    var pointAppend = document.createElement("span");
    pointAppend.setAttribute("class", "pointValue");
    pointAppend.append(pointValue);
    // messageAppend
    var message = "Bạn đã quay được vào ô"
    messageAppend.append(message);
    messageAppend.append(pointAppend);
    messageAppend.append(document.createTextNode(" điểm"));
    _this.setContent(messageAppend);
}

notificationBroad.prototype.setLoginForm = function(){
    var _this = this;
    _this.slideUp();
    // setTimeout(function(){
        _this.setTitle("Đăng nhập");
        var lgUser = new loginUser();
        _this.setContent(lgUser.createForm());
    // },300);
    $("[data-page-target='C']").click();
    window.location.hash = "C";
}

notificationBroad.prototype.slideUp = function(){
    var _this = this;
    _this.messageContent.children().slideUp();
}