﻿var count = 1;

//点击图标播放背景音乐
function music() {

    if (count == 1) {
        document.getElementById("music").pause();
        count = 2;
    } else {
        document.getElementById("music").play();
        count = 1;
    }

}

//点击导航栏子项变背景颜色
function nav_bgcolor(num) {

    for (var i = 1; i <= 5; i++) {
        var nav = document.getElementById("nav_" + i);
        var a = document.getElementById("a_" + i);
        if (num == i) {
            document.getElementById("nav_" + i).style.backgroundColor = "#31C27C";
            a.style.color = "#FFFFFF";


        } else {
            nav.style.backgroundColor = "#FFFFFF";
            a.style.color = "#000000";

        }
    }
}
//点击搜索按钮后变颜色
function search_color() {
    document.getElementById("search_button").style.backgroundColor = "#2CAB6E";
}
//鼠标放到注册上加深颜色
function register_color(num) {
    if (num == 1) {
        document.getElementById("register_button").style.backgroundColor = "#2CAB6E";
    }
    if (num == 2) {
        document.getElementById("register_button").style.backgroundColor = "#31C27C";
    }
}


//登录消除用户名密码不正确
function o_xiaochu(){
    document.getElementById("login_message").innerHTML = "";
}