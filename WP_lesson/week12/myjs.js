
var number = 1;
var plus = 3;
window.onload = function(){
    //for SVG & Javascript..
    setTimeout(moveCirle,10)

    setTimeout(movie,30)
}

//FOR SVG 
function moveCirle(){
   let title = document.querySelector("#title");
   
   let mc = document.querySelector("#mycircle2");
   let old_cx = parseInt(mc.getAttribute("cx"));
   old_cx+=plus;
   if(old_cx > 800)
    plus = plus * -1;
   if(old_cx < 30)
    plus = plus * -1; 

   mc.setAttribute("cx",old_cx);
   setTimeout(moveCirle,10);
}


var circle =  {
    cx : 30,
    cy : 50,
    plus: 5
}

//FOR Canvas
function movie(){
    var c = document.getElementById("my_canvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0,0,c.width,c.height);

    ctx.beginPath();
    ctx.arc(circle.cx, circle.cy, 25, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle="#0000ff";
    ctx.fill();
    circle.cx += circle.plus;

    if(circle.cx > 800)
        circle.plus = circle.plus * -1;
    if(circle.cx < 30)
    circle.plus = circle.plus * -1;
    setTimeout(movie,10);
}



