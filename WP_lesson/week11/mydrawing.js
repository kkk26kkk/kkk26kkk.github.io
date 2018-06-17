//mydrawings.js

var mycanvas;
var ctx;
var draw;

window.onload = function(evt){

    mycanvas = document.querySelector("#mycanvas");
    ctx = mycanvas.getContext("2d");
    draw = false;

    mycanvas.addEventListener("mousedown",function(event){
        draw = true;
    });
    mycanvas.addEventListener("mouseup",function(event){
        draw = false;
    });
    mycanvas.addEventListener("mousemove",function(event){
        if(!draw) return;
        let loc = this.getBoundingClientRect();
        //Subtract the MOUSE LOCATION FROM the element location
        let x = event.clientX - loc.x;
        let y = event.clientY - loc.y;
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, 2* Math.PI);
        ctx.stroke();
    });
};

