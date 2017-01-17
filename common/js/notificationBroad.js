function notificationBroad(obs="") {
    this.Obj = obs;
    this.title = this.Obj.find(".broad-title");
    this.messageContent = this.Obj.find(".notificationMessage");
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
    messageAppend.appendChild(pointAppend);
    messageAppend.appendChild(document.createTextNode(" điểm"));
    _this.setMessage(messageAppend);
}