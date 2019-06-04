//This connects the elements in the html to this js script
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var operator = document.getElementById("operator");
var calculate = document.getElementById("calculate");
var display = document.getElementById("display");

//When the calculate button it s clicked 
calculate.addEventListener("click",function(){
   // makes input of num1 and num2 the varaible number 1 and number 2
   var number1 = +num1.value;
   var number2 = +num2.value;
   var op = operator.value;

    // number 1 and then the slect of the input and then number 2 
    if(op === "+"){
        display.innerHTML = number1 + number2;
    }
    else if(op === "-"){
        display.innerHTML = number1 - number2;
    }
    else if(op === "*"){
        display.innerHTML = number1 * number2;
    }
    else if(op === "/"){
        display.innerHTML = number1 / number2;
    }
});