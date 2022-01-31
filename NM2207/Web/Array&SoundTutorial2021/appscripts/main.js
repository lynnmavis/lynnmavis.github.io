
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
var dot = paper.circle(pWidth/2, pHeight/2, 20);
dot.attr({"fill": "green"});

//-------------------
// load time
//-------------------
var loadTime=Date.now()
console.log("load time is " + loadTime/1000);

//Lets display a clock for the user in the footer.
var myFooter=document.getElementById("myFooter");

//-------------------
// Add some properties to dot just to keep track of it's "state"
dot.xpos=pWidth/2;     
dot.ypos=pHeight/2;
dot.xrate=5;
dot.yrate=5;

// our drawing routine, will use as a callback for the interval timer
var draw = function(){
    myFooter.innerHTML="Time: " + (Date.now()-loadTime)/1000

    // Update the position where we want our dot to be
    dot.xpos += dot.xrate;
    dot.ypos += dot.yrate;

    // Now actually move the dot using our 'state' variables
    dot.attr({'cx': dot.xpos, 'cy': dot.ypos});

    //---------------------------------------------
    // When dots hit the wall, reverse direction 
    if (dot.xpos > pWidth) {
        dot.xrate = -dot.xrate;
        sounds[0].pause();
        sounds[0].currentTime = 0;
        sounds[0].play();
    }
    if (dot.ypos > pHeight) {
        dot.yrate = -dot.yrate;
        sounds[1].pause();
        sounds[1].currentTime = 0;
        sounds[1].play();
    };
    if (dot.xpos < 0) {
        dot.xrate = -dot.xrate;
        sounds[2].pause();
        sounds[2].currentTime = 0;
        sounds[2].play();
    }
    if (dot.ypos < 0) {
        dot.yrate = -dot.yrate;
        sounds[3].pause();
        sounds[3].currentTime = 0;
        sounds[3].play();
    };
}


// call draw() periodically - save the timer in a variable so we can stop it if we want!

//audio stuff 
let backgroundSound = new Audio ("resources/background.wav")
let hitSound = new Audio ("resources/hit.wav")

// start toggle button 

let startButton = document.getElementById("startButtonID");
let toggleState = 0;
let timer; // this is a global variable

startButton.addEventListener('click', function(ev){
    if (toggleState=== 0){
        //Start Animation
        toggleState = 1;
        startButton.value = "STOP"
        timer=setInterval(draw, 20);
        backgroundSound.play();
        backgroundSound.volume=0.4;
        backgroundSound.loop = true;
      
    } else {
        //stop animation
        toggleState = 0
        startButton.value = "START"
        clearInterval(timer);
        backgroundSound.pause();
     
    }
})

//array of sounds 
let sounds = [];
sounds [0] = new Audio ("resources/sound1.wav")
sounds [1] = new Audio ("resources/sound2.mp3")
sounds [2] = new Audio ("resources/sound3.wav")
sounds [3] = new Audio ("resources/sound4.wav")




