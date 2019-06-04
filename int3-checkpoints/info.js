// connect the image source on the HTML document ot this JS document
var gThunberg = document.getElementById("gThunberg");
var kNirghin = document.getElementById("kNirghin");
var display = document.getElementById("display");

// when the image is clicked the text pops up
gThunberg.addEventListener("click", function(){
    display.innerHTML = "Greta Ernman Thunberg is a Swedish political activist seeking to stop global warming and climate change. In August 2018, she became a prominentfigure for starting the first school strike for climate, outside the Swedish parliament building.";
    
});

kNirghin.addEventListener("click", function(){
    display.innerHTML = "Kiara Nirghin is a South African inventor, scientist, and speaker. She is known for her award-winning work on a method to increase food security in drought stricken areas that won the 2016 Google Science Fair. Since 2018, she has attended Stanford University as an undergraduate.";
    
});