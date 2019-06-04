// links the button in the HTML document ot the JS document
var jumper = document.getElementById("jumper");

// causes the button to jump around
jumper.style.position = "absolute";

// the amount that button jumps the mouse is over it
jumper.addEventListener("mousemove",function(){
    jumper.style.top = Math.random()*500 + "px";
    jumper.style.left = Math.random()*500 + "px";
});

