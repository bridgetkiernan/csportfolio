/* global draw ellipse rect p processing width height size fill stroke strokeWeight */
var sketch = function(processing) {with(processing) {size(450, 450);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//
  
    //creates slow flashing of the arrow that starts the maze
    frameRate(2);

draw = function() {
  
   //creates creative background
   for(var i = 0; i < width; i+=30){
        for(var j = 0; j < height; j+=30){
            if(i<55 || i>350 || j<50 || j>350){ 
                var size = random(20);
                fill (0, random(255),random(255),0.5);
                strokeWeight(random(3));
                stroke(0,random(255),random(255));
                ellipse(i,j,size,size); 
            }
        }
    }
    
    //creates flashing arrow for start of maze and also creates a clean background so you can see the arrow against the cricle background
    fill(255,255,255);
    stroke(255,255,255);
    rect(0,55,45,20);
    stroke(random(255),random(255),random(255));
    fill(random(255),random(255),random(255));
    triangle(20,56,20,73,30,65);
    rect(5,60,15,7);
    
    //Creates outside borders
    strokeWeight(6);
    stroke(22, 83, 183);
    line(50,75,50,349);
    line(50,350,350,350);
    line(350,320,350,50);
    line(50,50,349,50);
    
    //creates maze lines inside
    stroke(0, 96, 255);
    strokeWeight(2);
    //First outer layer of lines(going outside in)
        //1st left lines
            line(75,75,75,280);
            line(75,300,75,320);
         //1st bottem lines
            line(75,321,250,321);
            line(270,321,320,321);
         //1st top lines
            line(75,75,320,75);
         //1st right lines
            line(321,75,321,150);
            line(321,170,321,320);
        
    //Second layer of lines
        //2nd left lines
            line(95,95,95,200);
            line(95,220,95,300);
        //2nd bottem lines
            line(95,301,301,301);
        //2nd top lines
            line(95,95,230,95);
            line(250,95,301,95);
        //2nd right lines
            line(302,95,302,300);
      
    //Left rectangle in middle
        //left side
            line(115,115,115,280);
        //bottem side
            line(115,282,200,282);
        //right side
            line(201,115,201,220);
            line(201,240,201,281);
        //top side
            line(115,115,150,115);
            line(170,115,200,115);
        //Lines inside rectangle/
            line(135,135,180,135);
            line(181,135,181,260);
            line(160,155,160,260);
            line(161,261,180,261);
            line(137,155,137,260);
    
    //Right Top rectangle in middle
        //left side
            line(221,115,221,155);
            line(221,175,221,199);
        //bottem side
            line(201,200,279,200);
        //right side
            line(280,115,280,130);
            line(280,150,280,199);
        //top side
            line(221,115,300,115);
        //lines inside rectangle
            line(240,135,240,180);
            line(260,135,260,199);
            line(240,181,259,181);
      
    //Right Bottem rectangle in middle
        //left side
            line(221,220,221,279);
        //bottem side
            line(221,280,250,280);
            line(270,280,279,280);
        //right side
            line(280,220,280,300);
        //top side
            line(221,220,279,220);
        //lines inside rectangle
            line(241,240,241,279);
            line(241,240,260,240);
            line(241,261,260,261);
    
    //Blocking lines(right to left)
        line(54,281,73,281);
        line(75,150,93,150);
        line(151,114,151,95);
        line(302,260,320,260);
        line(321,280,345,280);
    
    //Makes the star at the end of the maze
        strokeWeight(9);
        stroke(255,255,0);
        line(360,320,375,350);
        line(360,320,345,350);
        line(375,350,340,330);
        line(345,350,380,330);
        line(340,330,380,330);
};

//creates line for drawing in the maze
mouseDragged =function(){
    strokeWeight(4);
    stroke(0, 255, 51);
        if(mouseX > 50 && mouseY > 50 && mouseX<350 && mouseY< 350 ){
            line(mouseX,mouseY,coords[0],coords[1])
        }
    coords = [mouseX,mouseY]
};

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
