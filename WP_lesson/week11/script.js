//script.js

// PURE Javascript CODE.... 
window.onload =function(){
   var btnShow = document.querySelector("#btnShow");
   var btnHide = document.querySelector("#btnHide");
   btnShow.addEventListener("click",function(ev){
       // alert("show");
       let mc = document.querySelector("#mycircle");
       mc.style.display= "";
    });
    btnHide.addEventListener("click",function(ev){
        //alert("hide");
        let mc = document.querySelector("#mycircle");
        mc.style.display= "none";
    });

    var mysvg = document.querySelector("#mysvg");
    mysvg.addEventListener("click",function(event){
        //alert("ok");
        let xy = document.getElementById("xy");
        let mc = document.querySelector("#mycircle");
        xy.innerHTML = "location in screen:" +  event.clientX + " | " + event.clientY;

        //GET THE LOCATION OF the object: mycircle
        // DOES NOT WORK IN IE
        loc = this.getBoundingClientRect();

        //Subtract the MOUSE LOCATION FROM the element location
        x = event.clientX - loc.x;
        y = event.clientY - loc.y;

        mc.setAttribute("cx",parseInt(x));
        mc.setAttribute("cy",parseInt(y));

    });




}
//JQUERY
$(document).ready(function(event){
    //alert("jquery is ok");
    $("#btnPuda").click(function(event){
        //alert("Puda is ok");
        $("#mycircle").show();
    });
    $("#btnSungi").click(function(event){
        //alert("Sungi is ok");
        $("#mycircle").hide();
    });
});


