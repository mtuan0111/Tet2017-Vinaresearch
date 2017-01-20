function notificationBroad(obs="") {
    var _this = this;
    _this.Obj = obs;
    _this.title = _this.Obj.find(".broad-title");
    _this.messageContent = _this.Obj.find(".notificationMessage");
}

// notificationBroad.prototype
notificationBroad.prototype.setTitle = function(stringTitle = "Thông báo") {
    this.title[0].innerHTML = stringTitle;
}

notificationBroad.prototype.setMessage = function(messageContent){
    this.messageContent.children().remove();
    this.messageContent.append(messageContent)
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
    _this.setMessage(messageAppend);
}

notificationBroad.prototype.setLoginForm = function(){
    var _this = this;
    _this.slideUp();
    setTimeout(function(){
        _this.setTitle("Đăng nhập");

        var lgUser = new loginUser();
        _this.setMessage(lgUser.createForm());
    },300)
}

notificationBroad.prototype.slideUp = function(){
    var _this = this;
    // console.log(1);
    _this.messageContent.children().slideUp();
}