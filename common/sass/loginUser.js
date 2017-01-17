function loginUser(){

}

loginUser.prototype.createForm = function(){
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

}

                  <form class="login-form">
                    <input id="username" type="text" name="username" placeholder="Tài khoản" class="type">
                    <input id="password" type="password" name="password" placeholder="Mật khẩu" class="type">
                    <label for="rememberMe">Nhớ tài khoản</label>
                    <input id="rememberMe" type="checkbox">
                    <input id="submit" type="submit" value="Đăng nhập">
                  </form>