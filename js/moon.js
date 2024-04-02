
let stars = document.getElementById("stars");
let namme = document.querySelector(".name");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let boat = document.getElementById("boat");
let river = document.getElementById("river");

window.onscroll = function () {
    let scroll = scrollY;
    stars.style.left = scroll +"px";
    moon.style.top = scroll * 4  +"px";
    mountains3.style.top = scroll * 2  +"px";
    mountains4.style.top = scroll * 1.5  +"px";
    river.style.top = scroll +"px";
    boat.style.left = scroll +"px";
    namme.style.fontSize = scroll + "px";
    if (scrollY >= 83) {
        document.querySelector(".main").style.background = 'linear-gradient(#376281,#10001f)';
        // namme.style.bottom = -80  +"px"
    }else {
        document.querySelector(".main").style.background = 'linear-gradient(#540842,#1e0744)';
    }
};


