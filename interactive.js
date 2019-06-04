// connects the HTML elements to JS
var userInput = document.getElementById("userInput");
var answer = document.getElementById("answer");
var number = document.getElementsByClassName("number");
var clear = document.getElementById("clear");
var powerTwo = document.getElementById("powerTwo");
var percent = document.getElementById("percent");
var divide = document.getElementById("divide");
var multi = document.getElementById("multi");
var minus = document.getElementById("minus");
var plus = document.getElementById("plus");
var dot = document.getElementById("dot");
var solve = document.getElementById("solve");

// loops through the array and graps the value of the button clicked
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function(evt) {
        userInput.value += evt.target.value;
    });
    
// clears the entire calculator display when button is clicked
clear.addEventListener("click", function() {
    userInput.value = "";
    answer.value= "";
});

//raises the userInput to the second power when button is clicked
powerTwo.addEventListener("click", function() {
    userInput.value += "^2"
});

//divides the userInput by 100 to get a percent when button is clicked
percent.addEventListener("click", function() {
    userInput.value += "/100"
});

//inserts / into the userInput when button is clicked
divide.addEventListener("click", function() {
    userInput.value += "/";
});

//inserts * into the userInput when button is clicked
multi.addEventListener("click", function() {
    userInput.value += "*";
});

//inserts - into the userInput when button is clicked
minus.addEventListener("click", function() {
    userInput.value += "-";
});

//inserts + into the userInput when button is clicked
plus.addEventListener("click", function() {
    userInput.value += "+";
});

//inserts . into the userInput when button is clicked
dot.addEventListener("click", function() {
    userInput.value += ".";
});

// solves the userInput and diplays it in the answer and also inserts = into the userInput when button is clicked
solve.addEventListener("click", function() {
    answer.value = eval(userInput.value);
    userInput.value += "=";
});



