
let paper = new Raphael(document.getElementById("svgCanvas"));
// Find get paper dimensions
let dimX = paper.width;
let dimY = paper.height;

//
let backgroundSound = new Audio ("Resources/background.mp3");
let hitSound = new Audio ("Resources/bump.wav")


let distance = function(p1, p2){
    return Math.sqrt(Math.pow(p2.x-p1.x,2)+Math.pow(p2.y-p1.y,2));
}

//--------------------------------
// variables for controlling frame rate and speed of animated object
let frameLength= 20; // in ms, used for the interval at which we call the draw() function
let time = 0;      // time since the page was loaded into the browser; incremented in draw()



//////////MAKE SHOOTER 
let shooter = paper.rect((dimX/2)-20, dimY-20, 20,20);
    shooter.attr({
        "fill" : "#BF5A5A",
        "stroke": "#BF5A5A",
        }); 
    shooter.xpos=(dimX/2)-20;
    shooter.ypos=dimY-10;

let shooterSpeed = 20;



///////// CREATE THREAT ARRAY
let threats = [];
let numThreats = 8;
let threatRows= 8;
let threatColumns = 5;
let threatStatus = "alive";

for (let j = 0; j < threatRows; j++) {
    threats[j]=[];
    for(let k = 0; k < threatColumns; k++){

    if (threatStatus=="alive"){

    threats[j][k] = paper.circle(j*65+65, k*55+55, 14);
    threats[j][k].xpos = j*75+75;
    threats[j][k].ypos = k*50+50;
    threats[j][k].xrate = 4;   
    threats[j][k].yrate = 10; 
    threats[j][k].color = "#6495ED";
    threats[j][k].attr({
        "stroke": "DodgerBlue",
        "stroke-width": 2,
        "fill" : "#6495ED",  
    })
    
    }
}
}
  

//////// CREATE BULLET ARRAY
let bullets = new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19);

for (let i=0; i<bullets.length; i++){
    bullets[i] = paper.circle (-100, -100, 3);
    bullets[i].posx = -100;
    bullets[i].posy = -100;
    bullets[i].xrate = 0;
    bullets[i].yrate = 0;
    bullets[i].attr({
    "fill" : "Red",
    "stroke":"Red",
    })
    bullets[i].color = "IndianRed";
   
}

///for moving right 
function moveRight(){
   shooter.xpos+=shooterSpeed;
  
   if (shooter.xpos+40>dimX){ 
    shooter.xpos=dimX-40
}
}

/// for moving left 
function moveLeft(){
    shooter.xpos-=shooterSpeed;
   if (shooter.xpos-20<0){ 
    shooter.xpos=0
}
}


/// shoot bullet function 
function shootBullet(){
        
        let randomNum = Math.floor(Math.random()*bullets.length);
        bullets[randomNum].posx = shooter.xpos+10;
        bullets[randomNum].posy = shooter.ypos;
        bullets[randomNum].yrate = -10;
        

}


///key controls ///

function control(event){
if (event.keyCode===39){
    moveRight();
}

if (event.keyCode===37){
    moveLeft();
}

if (event.keyCode===32 ){
    shootBullet();
}

};


document.addEventListener('keydown', control);


////// DETECT COLLISIONS between threat and bullet 
let counter=0;

let detectCollision = function(c1, c2){
    
    let d = distance({"x": c1.attr("cx") , "y": c1.attr("cy")  }, {"x": c2.attr("cx")  , "y": c2.attr("cy")  });
  

    if (d < (c1.attr("r") + c2.attr("r"))){
        counter++;
        console.log("number of collision is " + counter);
        hitSound.pause();
        hitSound.currentTime=0;
        hitSound.play();
        
        if (counter >= 40){
            endGame();
        }
        return true;
    } else {
        //console.log("not colliding");
        return false;
    }
}

// make bullet
let draw = function(){
    time+=frameLength;

    for (let i = 0; i < bullets.length; i++){
        
        let randomNum = Math.floor(Math.random()*bullets.length);
        bullets[randomNum].posx = bullets[randomNum].posx + bullets[randomNum].xrate;
        bullets[randomNum].posy = bullets[randomNum].posy + bullets[randomNum].yrate;
        bullets[randomNum].attr({
            "cx": bullets[randomNum].posx,
            "cy": bullets[randomNum].posy,
        });
      
//check for collision for every single target 
//(while loop)
/////////REMOVING THREATS AND BULLETS AFTER COLLISION////////


let j =0;

while (j<threatRows){

let k=0;


    while (k<threatColumns){
             if (threats[j][k].ypos > (shooter.ypos-20)){
            threatStatus="dead";
            clearInterval(startAnimation);
         }
            
        if (detectCollision(threats[j][k], bullets[randomNum])){
        

            threats[j][k].remove(); 
            teleportBullet();
           
           }

         else {}


    k++;
    }
   j++;

}


function teleportBullet(){
 
        bullets[randomNum].posx = -100;
        bullets[randomNum].posy = -100;
        bullets[randomNum].attr({
            "cx": -100,
            "cy": -100,
        });
}



}


//MOVE THREATS LEFT N RIGHT 

let touchSide = false;

for (let j = 0; j < threatRows; j++) {
 
    for(let k = 0; k < threatColumns; k++){

    threats[j][k].xpos = threats[j][k].xpos + threats[j][k].xrate;
    threats[j][k].attr({
            "cx": threats[j][k].xpos,
            "cy": threats[j][k].ypos,
            
        });
  
if (threats[j][k].xpos > dimX || threats[j][k].xpos < 0){
        touchSide = true;
         console.log(touchSide);
}



}}

if (touchSide){

for (let j = 0; j < threatRows; j++) {


    for (let k = 0; k < threatColumns; k++){
    threats[j][k].xrate *= -1;
    threats[j][k].xpos = threats[j][k].xpos + threats[j][k].xrate;
    threats[j][k].ypos += 34;
    threats[j][k].attr({
            "cx": threats[j][k].xpos,
            "cy": threats[j][k].ypos,
        });
}

}
}


    shooter.attr({
        "x": shooter.xpos,
    })

if (threatStatus=="dead"){
    backgroundSound.pause();
    gameOver();
}
}

let startAnimation;
let starttime;

let startButton = paper.rect(0,0, dimX, dimY);
let startText = paper.text (dimX/2, dimY/2, 'Start Game');
startText.attr({
    "font-size": 40,
    "font-family": 'Courier New',
    "fill": "#BF5A5A",
    "font-weight": "bolder",


})


startButton.attr({
    'stroke' : '#D5ACA9',
    'fill' : '#D5ACA9',

});

let hideStartButton = function(){
    startButton.hide();
    startText.hide();
    
}

let showStartButton = function(){
    startButton.show();
    startText.show();
    
}


let start = function(){
    hideStartButton();
    startAnimation = setInterval(draw, frameLength);
    backgroundSound.play();
    backgroundSound.volume=0.4;
    backgroundSound.loop = true;
    counter=0;
    starttime = Date.now();
   
}

startButton.node.addEventListener('click', start);

let endGame = function(){
    let totaltime = (Date.now() - starttime)/1000;
    clearInterval(startAnimation);
    backgroundSound.pause();

    confirm("You Win! You completed the task in " + totaltime + " seconds! :)");

    location.reload();
 
    showStartButton();

}

let gameOver = function(){
    
    confirm("Game Over...You've only eliminated " + counter + "/40 threats :(");
    location.reload();
    showStartButton();
    
}




