
console.log("Yo, I am alive!");

// Grab the div where we will put our Raphael paper
var centerDiv = document.getElementById("centerDiv");

// Create the Raphael paper that we will use for drawing and creating graphical objects
var paper = new Raphael(centerDiv);

// put the width and heigth of the canvas into variables for our own convenience
var pWidth = paper.width;
var pHeight = paper.height;
console.log("pWidth is " + pWidth + ", and pHeight is " + pHeight);
//---------------------------------------------------------------------

// Just create a nice black background
var bgRect = paper.rect(0,0,pWidth, pHeight);
bgRect.attr({"fill": "black"});



//array 

let numDisks = 50;
let diskArray = []
i=0
while (i<numDisks){
    console.log(i);
    diskArray[i] = paper.circle(Math.random()*pWidth, Math.random()*pHeight, 20)
    diskArray[i].xpos = Math.random()*pWidth;
    diskArray[i].ypos = Math.random()*pHeight;
    diskArray[i].xrate = 10*Math.random()
    diskArray[i].yrate = 10*Math.random()
    colorString = "hsl(" + Math.floor(360*Math.random())+", "+ Math.floor(100*Math.random())+"%, "+Math.floor(100*Math.random())+"%)";
    console.log(colorString);
    diskArray[i].attr({
        "fill": colorString,
    })
    diskArray[i].color = colorString;


    //colorString = function(h,s,l){
        //return "hsl(" + h +"," + s + "%, " + l + "%)";
    //}
    //diskArray[i].attr({
        //"fill": colorString(Math.floor(360*Math.random()), Math.floor(100*Math.random()),Math.floor(100*Math.random()))
    //})

     i++;
    
}

//
// our drawing routine, will use as a callback for the interval timer
var draw = function(){
    i=0;
    while (i<numDisks){ 

    // Update the position where we want our disk to be
    diskArray[i].xpos += diskArray[i].xrate;
    diskArray[i].ypos += diskArray[i].yrate;


    // Now actually move the disk using our 'state' variables
    diskArray[i].attr({
        'cx': diskArray[i].xpos, 
        'cy': diskArray[i].ypos,
    });

    // keep the object on the paper
    if (diskArray[i].xpos > pWidth) {diskArray[i].xrate = -diskArray[i].xrate;}
    if (diskArray[i].ypos > pHeight) {diskArray[i].yrate = - diskArray[i].yrate};
    if (diskArray[i].xpos < 0) {diskArray[i].xrate = -diskArray[i].xrate;}
    if (diskArray[i].ypos < 0) (diskArray[i].yrate = - diskArray[i].yrate);

    i++;
}


}

// Call draw() periodically
// We startthe animation last thing as the module loads
setInterval(draw, 20); 


//transparent rect 
var transRect = paper.rect(0,0,pWidth, pHeight);
transRect.attr({
    "fill": "red",
    'fill-opacity': 0,
});

//"state" variable
let mouseState= {};
mouseState.pushed=0;
mouseState.X = 0;
mouseState.Y=0;

//distance function
let distance = function(x1, y1, x2, y2){
    d1 = x2 - x1;
    d2 = y2 - y1;
    return Math.sqrt(Math.pow(d1, 2) + Math.pow(d2, 2))
}

//event listener 
transRect.node.addEventListener("mousedown", function(ev){
    mouseState.pushed=1;
    console.log("mouse is down and state is " + mouseState.pushed);
    i=0;
    while (i<numDisks){
        let dist = distance(diskArray[i].attr("cx"), diskArray[i].attr("cy"), mouseState.X, mouseState.Y)
        if (dist <100){
            diskArray[i].attr({'fill': "white"})
        }
        i++;
     }
        
});

transRect.node.addEventListener("mouseup", function(ev){
    mouseState.pushed=0;
    console.log("mouse is up and state is " + mouseState.pushed);
    i=0;
    while (i<numDisks){ 
            if(diskArray[i].attr("fill") == "white"){
            diskArray[i].attr({"fill": diskArray[i].color,})
        }
        i++;

    }
   

});

transRect.node.addEventListener("mousemove", function(ev){
    mouseState.X=ev.offsetX;
    mouseState.Y=ev.offsetY;
})








