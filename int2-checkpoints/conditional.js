/* global draw ellipse rect p processing width height size fill stroke strokeWeight */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

     
draw = function() {
    background();
    strokeWeight(4);
    
    if(mouseX < 200){
        //changes the color to red in the top left conner, rectangle
        if(mouseY < 200){
            fill (255, 0, 0);
            stroke(175, 0, 0);
            quad(mouseX-25,mouseY-25,mouseX+25,mouseY+25,mouseX+25,mouseY-25,mouseX-25,mouseY+25);
        } 
        //changes the color to green in the bottem left conner
        else{
            fill(0, 255, 0);
            stroke(0, 175, 0);
            ellipse(mouseX,mouseY,50,50);
        }
            
    } 
    else{
        //changes the color to blue in the top right conner
         if(mouseY < 200){
            fill (0,0,255);
            stroke(0,0,175);
            triangle(mouseX,mouseY, mouseX+50,mouseY,mouseX+25,mouseY-50);
        } 
        //changes the color to purple in the bottem right conner
        else{
            fill(255,0,255);
            stroke(175,0,175);
            rect(mouseX,mouseY,50,50)
        }
    }
       

};
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
