function loginUser(){
    this.loginForm = null;


}

loginUser.prototype.createForm = function(){
    var _this = this;

    var form = document.createElement("form");
    form.setAttribute("class","login-form");

    var username = document.createElement("input");
    username.setAttribute("id","username");
    username.setAttribute("type","text");
    username.setAttribute("name","username");
    username.setAttribute("placeholder","Tài khoản");
    username.setAttribute("class","type");

    var password = document.createElement("input");
    password.setAttribute("id","password");
    password.setAttribute("type","password");
    password.setAttribute("name","password");
    password.setAttribute("placeholder","Mật khẩu");
    password.setAttribute("class","type");

    var rememberMe = document.createElement("input");
    rememberMe.setAttribute("id","rememberMe");
    rememberMe.setAttribute("type","checkbox");

    var rememberLbl = document.createElement("label");
    rememberLbl.setAttribute("for","rememberMe");
    rememberLbl.append("Nhớ tài khoản")

    var submitBtn = document.createElement("input");
    submitBtn.setAttribute("id","submit");
    submitBtn.setAttribute("type","submit");
    submitBtn.setAttribute("value","Đăng nhập");

    form.append(username);
    form.append(password);
    form.append(rememberLbl);
    form.append(rememberMe);
    form.append(submitBtn);

    _this.form = form;
    alert(123);
    $(document).on("submit",_this.form,function(e){
        var username=$("input[name='lg_Username']").val();
        var password=$("input[name='lg_Password']").val();
        var redirect=$("input[name='popup_redirect']").val();
        var remember=$("input[name='lg_rememberMe']").val();
        alert(123);

        $.ajax({
            type: "POST",
            url: "/public/index/check-login-ajax",
            data:{'lg_Username':username, 'lg_Password':password, 'rememberMe':remember},
            success: function(data) {
                    console.log("data: ", data)
                    if(data=='1'){
                        location.reload();
                    }
                    else{
                        $(".error-message p").html(data).parent(".error-message").slideDown();
                    }
            }
        });

        e.preventDefault();
    })

    return form;
}