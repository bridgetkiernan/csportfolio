// Creates variables and saves DOM elements to each one
var newColor = document.getElementById("newColor");
var colorChangeButton = document.getElementById("colorChangeButton");

// Eventlistener for the button
colorChangeButton.addEventListener("click", function(){
    document.body.style.backgroundColor = newColor.value;
})