/* global draw ellipse rect p processing width height size fill stroke strokeWeight */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
 frameRate(3);

     for(var i = 0; i < 1; i+=30){
         noStroke();
    fill(random(255),random(255),random(255));
    triangle(i+20,56,i+20,73,i+30,65);
    rect(i+5,60,15,7);
    
    draw = function (){
        for(var i = 0; i < 1; i+=30){ 
            noStroke();
    fill(random(255),random(255),random(255));
    triangle(i+20,56,i+20,73,i+30,65);
    rect(i+5,60,15,7);
    }
    };
   
        
     }
           
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);