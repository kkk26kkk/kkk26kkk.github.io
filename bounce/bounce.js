var COUNT = 20;
var balls =[];
var canvas;
var ctx;

var mouseX = 0;
var mouseY = 0;

function randomColor(num) {          
    return Math.floor(Math.random() * num);
}

function Ball (width,height){
    this.width = width;
    this.height = height;
    this.x = parseInt(Math.random() * width) ;
    this.y = parseInt(Math.random() * height) ;
    this.radius = 5 + parseInt(Math.random() * 15) ;
    this.color = "rgb(" + randomColor(255) + "," + randomColor(255) + "," + randomColor(255) + ")";
    this.x_speed = 2 + parseInt(Math.random()*5);  
    this.y_speed = this.x_speed;

    this.update= function(){
        if(mouseX > 0 && mouseY > 0){
            if(Math.abs(mouseX - this.x) < this.radius && Math.abs(mouseY - this.y) < this.radius){
                if(this.radius < 50)
                    this.radius += 5;
            } else {
                if(this.radius > 10)
                    this.radius += -1;
            }
        }

        if(this.x>(this.width-this.radius) )
            this.x_speed = this.x_speed * -1;
        if(this.x<this.radius)
            this.x_speed = this.x_speed * -1;
        this.x+=this.x_speed;

        if(this.y>(this.height-this.radius) )
            this.y_speed = this.y_speed * -1;
        if(this.y<this.radius)
            this.y_speed = this.y_speed * -1;
        this.y+=this.y_speed;
    }

    this.draw = function(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.strokeStyle = this.color;
        ctx.stroke();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

var minNum = 10;
var maxNum = 100;
var numSpan = document.getElementById("numballs");
var decNum = document.getElementById("decnum");
var incNum = document.getElementById("incnum");
var setNum = function(newNum){
    if(newNum < minNum)
        newNum = minNum;
    else if(newNum > maxNum)
        newNum = maxNum;
    COUNT = newNum;

    numSpan.innerHTML = COUNT;
}

decNum.addEventListener("click", function(event){
    setNum(COUNT - 1);
    if(COUNT > 10)
        balls.pop(new Ball (canvas.width,canvas.height));
    if(COUNT == 11){
        balls.pop(new Ball (canvas.width,canvas.height));
    }
});

incNum.addEventListener("click", function(event){
    setNum(COUNT + 1);
    if(COUNT < 100)
        balls.push(new Ball (canvas.width,canvas.height));
    if(COUNT == 99)
        balls.push(new Ball (canvas.width,canvas.height));
});

window.onload = function() {

    canvas = document.getElementById("my_canvas");

    canvas.onmousemove = function(e){
        var rect = canvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
    }
    canvas.onmouseout = function(e){
        mouseX = -1;
        mouseY = -1;
    }
    
    for(x=0; x<COUNT; x++){
        balls.push(new Ball (canvas.width,canvas.height));
    }

    setTimeout(movie,1000/30);
}

function movie(){

    ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(x=0; x<balls.length; x++){
        balls[x].draw(ctx);
        balls[x].update();
    }
    setTimeout(movie,1000/30);
}