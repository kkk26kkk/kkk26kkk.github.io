// Bounce.js

var COUNT = 20;
var balls =[];
var canvas; 

function   Ball (width,height){
    this.width = width;
    this.height = height;
    this.x = parseInt(Math.random() * width) ;
    this.y = parseInt(Math.random() * height) ;
    this.radius = 5 + parseInt(Math.random() * 15) ;
    this.color = "#00f";
    this.x_speed = 2 + parseInt(Math.random()*5);  
    this.y_speed = this.x_speed;
    this.update= function(){
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
}



window.onload = function() {
    canvas = document.getElementById("my_canvas");
    for(x=0; x<COUNT; x++){
        balls.push(new Ball (canvas.width,canvas.height));
    }
    setTimeout(movie,1000/30);
}

function movie(){

    let ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(x=0; x<balls.length; x++){
        ctx.beginPath();
        ctx.arc(balls[x].x, balls[x].y, balls[x].radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle= balls[x].color; 
        ctx.fill();
       balls[x].update()
    }
    setTimeout(movie,1000/30);
   
}


