/* global draw ellipse rect p processing width height size fill stroke strokeWeight */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var xPos = 0;
var yPos = 0;
var xPos2 = 300;
var yPos2 = 0;
var yPos3 = 30;
var wPos3 =30;
var yPos4 =30;
var wPos4 = 390;
draw = function() {
    
    // center circle
    strokeWeight(2)
    fill (0,250,250)
    ellipse(150,225,65,65)
  
   // draws blue circles from top left to bottem right 
    strokeWeight(2);
    stroke(57,0,214);
    fill(500,500,500);
    ellipse(xPos,yPos,30,30);
    xPos+=20;
    yPos+=30;
    
    // draws blue circle from top right to bottem left
    strokeWeight(2);
    stroke(57,0,214);
    fill(500,500,500);
    ellipse(xPos2,yPos2,30,30);
    xPos2-=20;
    yPos2+=30;
    

   noFill()
    // small to big to small
    strokeWeight(1);
    stroke(0,0,0);
    ellipse (150,yPos3,wPos3,30);
    wPos3+=10;
    yPos3+=30;
    
    // big to small to big
    strokeWeight(1);
    stroke(0,0,0);
    ellipse (150,yPos4,wPos4,30);
    yPos4+=30;
    wPos4-=20;
    

};

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
