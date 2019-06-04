/* global draw ellipse rect p processing width height size fill stroke strokeWeight */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//



//This section draws the mickey mouse face//
drawMickey = function(x,y){
    strokeWeight (2);
    ellipse(x,y,100,100);
    ellipse(x+45,y-50,50,50);
    ellipse(x-45,y-50,50,50);
};


// This causes the mickey mouse face to show up where the mouse is clickd.//
mouseClicked = function(){
        drawMickey(mouseX,mouseY)
         if(mouseX < 200){
        //changes the color to red in the top left conner, rectangle
        if(mouseY < 200){
            fill (255, 0, 0);
        } 
        //changes the color to green in the bottem left conner
        else{
            fill(0, 255, 0);
        }
            
    } 
    else{
        //changes the color to blue in the top right conner
         if(mouseY < 200){
            fill (0,0,255);
            } 
        //changes the color to purple in the bottem right conner
        else{
            fill(255,0,255);
        }
    }
};
    



// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);