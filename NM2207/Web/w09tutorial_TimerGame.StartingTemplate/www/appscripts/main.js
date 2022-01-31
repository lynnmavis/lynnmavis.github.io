
console.log("Yo, I am alive!");

// Grab the div where we will put our Raphael paper
var centerDiv = document.getElementById("centerDiv");

// Create the Raphael paper that we will use for drawing and creating graphical objects
var paper = new Raphael(centerDiv);

// put the width and heigth of the canvas into variables for our own convenience
var pWidth = paper.width;
var pHeight = paper.height;
console.log("pWidth is " + pWidth + ", and pHeight is " + pHeight);

// Just create a nice black background
var bgRect = paper.rect(0,0,pWidth, pHeight);
bgRect.attr({"fill": "black"});

// A dot for us to play with
var dot = paper.circle(pWidth/2, pHeight/2, 50);
dot.attr({"fill": "green"});

//-------------------
// load time
//-------------------
var loadTime=Date.now()
console.log("load time is " + loadTime/1000);

//HTML5 audio elements
var myFooter=document.getElementById("myFooter");

//HTML5 audio element
var aBackgroundSnd = new Audio ("resources/342566__inspectorj__sewer-soundscape-a.wav");


var aBumpSnd = new Audio ("resources/67408__noisecollector__vibrabonk.wav");



//-------------------
//game duration
let gameDuration = 5;


// Add some properties to dot just to keep track of it's "state"
dot.xpos=pWidth/2;
dot.ypos=pHeight/2;
dot.xrate=(Math.random()-0.5)*4;
dot.yrate=(Math.random()-0.5)*4;

// our drawing routine, will use as a callback for the interval timer
var draw = function(){
    myFooter.innerHTML="Time: " + (Date.now()-startTime)/1000

    // Update the position where we want our dot to be
    dot.xpos += dot.xrate;
    dot.ypos += dot.yrate;

    // Now actually move the dot using our 'state' variables
    dot.attr({'cx': dot.xpos, 'cy': dot.ypos});

    //---------------------------------------------
    // Set sound parameters based on the position of the moving dots
     // When dots hit the wall, reverse direction 
    if (dot.xpos > pWidth) {
        dot.xrate = -dot.xrate;
        aBumpSnd.pause();
        aBumpSnd.currentTime=0;
        aBumpSnd.play();
    }
    if (dot.ypos > pHeight) {
        dot.yrate = - dot.yrate;
        aBumpSnd.pause();
        aBumpSnd.currentTime=0;
        aBumpSnd.play();
    };
    if (dot.xpos < 0) {
        dot.xrate = -dot.xrate;
        aBumpSnd.pause();
        aBumpSnd.currentTime=0;
        aBumpSnd.play();
    }
    if (dot.ypos < 0) {
        dot.yrate = - dot.yrate;
        aBumpSnd.pause();
        aBumpSnd.currentTime=0;
        aBumpSnd.play();
    };

    //STOP GAME
    if ((Date.now()- startTime)/1000 > gameDuration)
        endGame();
}

// call draw() periodically
// Start the timer with a button (instead of as program loads) so that sound models have time to load before we try play or set their parameters in the draw() function.
var toggle="off";
var timer;
document.getElementById("startButtonID").addEventListener('click', function(ev){
    if (toggle=="off"){
       
        startGame();
        aBackgroundSnd.play();
        aBackgroundSnd.volume=.2;
        aBackgroundSnd.loop=true;

        //define startTime once the user clicks 
        startTime = Date.now();

    } else {
        toggle="off"
        aBackgroundSnd.pause();
        endGame();
    }
})

//startgame function 
let startGame = function(){
    
    timer=setInterval(draw, 20);
    toggle="on";

    dot.xpos=pWidth/2;
    dot.ypos=pHeight/2;
    dot.xrate=(Math.random()-0.5)*4;
    dot.yrate=(Math.random()-0.5)*4;
}

// end game function 
let endGame = function(){
    myFooter.innerHTML="Time: " + 0
    clearInterval(timer);
    toggle="off";
    confirm("You made " + numClicks + " number of clicks!")
    numClicks = 0;
    toggle="off";


    dot.xpos=pWidth/2;
    dot.ypos=pHeight/2;
   

    dot.attr({
        'cx': dot.xpos,
        'cy': dot.ypos
    })

}

//calc number of clicks
let numClicks = 0;
dot.node.addEventListener("click", function(){
        numClicks++;
        console.log(numClicks);
})












