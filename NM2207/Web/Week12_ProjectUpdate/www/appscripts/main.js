

console.log("yo, I'm alive!");


let paper = new Raphael(document.getElementById("mySVGCanvas"));
// Find get paper dimensions
let dimX = paper.width;
let dimY = paper.height;

// maps x in  the interval [a,b] into the interval [m, n]
let map =function (x, a, b, m, n){
    let range = n-m;
    // x is 'proportion' of the way from a to b
    // e.g. if a=10, b=20, and x=15, x is half (.5) of the way from a to b
    let proportion = (x-a)/(b-a); 
    return (m + proportion*range);
}

//--------------------------------
// variables for controlling frame rate and speed of animated object
let frameLength= 20; // in ms, used for the interval at which we call the draw() function
let time = 0;      // time since the page was loaded into the browser; incremented in draw()

// Create an array of threats 

let threats = [];
let numThreats = 8;
i=0
while (i<numThreats){
    console.log(i);
    threats[i] = paper.circle(i*120+120, dimY/4, 40);
    threats[i].xpos = i*120+120;
    threats[i].ypos = dimY/4;
    threats[i].xrate = 2;   
    threats[i].yrate = 2; 
    threats[i].color = "#CCAAFF";
    threats[i].attr({
        "stroke": "#444444",
        "stroke-width": 2,
        "fill" : "#CCAAFF"  
    })
    i++;
}




let distance = function(p1, p2){
    return Math.sqrt(Math.pow(p2.x-p1.x,2)+Math.pow(p2.y-p1.y,2));
}

//make shooter movable 

let shooter = paper.rect((dimX/2)-20, dimY-40, 40,40);
    shooter.attr({
        "fill" : "blue",
        }); 
    shooter.xpos=(dimX/2)-20;
    shooter.ypos=dimY-40;

let shooterSpeed = 20;


//
let bullets = new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19);

for (let i=0; i<bullets.length; i++){
    bullets[i] = paper.circle (-100, -100, 14);
    bullets[i].posx = -100;
    bullets[i].posy = -100;
    bullets[i].xrate = 0;
    bullets[i].yrate = 0;
    bullets[i].attr({
    "fill" : "black",
    })
    bullets[i].color = "black";
    
    
}

/*/// CREATE BULLETS 
let bullets = [];

/// bullet function 
function bullet (x, y, r, color){
    let bullet = {};
    bullet.x = x;
    bullet.y = y;
    bullet.r = 20;
    bullet.shape = paper.circle();
    bullet.shape.attr({x:bullet.x, y:bullet.y, r:bullet.r, fill:color});
    bullet.update = function(){
        bullet.shape.attr({x:bullet.x, y:bullet.y, r:bullet.r, fill:color});
    }

    return bullet;
}

//create bullet function 
function createBullets (){
    x = shooter.xpos;
    y = shooter.ypos;

    bullets.push(bullet(x, y, 20, "pink"));
}

function moveBullets (){
    i=0;
    while (i<10){
        bullets[i].y -= 10;
        bullets[i].update();
        i++;
    }
}*/

//update bullet function to move and shoot 

///for moving right 
function moveRight(){
   shooter.xpos+=shooterSpeed;
   console.log(shooter.xpos)
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
    //createBullets();
    //moveBullets();
    //bullets.push(bullet(shooter.xpos, shooter.ypos, 20, "red"));};
        let randomNum = Math.floor(Math.random()*bullets.length);
        bullets[randomNum].posx = shooter.xpos+20;
        bullets[randomNum].posy = shooter.ypos;
        bullets[randomNum].yrate = -10;
        console.log(randomNum);
       
    
}

/// move bullet function 


///key controls ///

function control(event){
if (event.keyCode===39){
    moveRight();
}

if (event.keyCode===37){
    moveLeft();
}

if (event.keyCode===32){
    shootBullet();

}

};

document.addEventListener('keydown', control);










// make bullet
let statusActive;
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
      
       /* if (bullets[randomNum].posy>0 && bullets[randomNum].posy<dimY){
            statusActive = true;
            console.log(statusActive);
        }

        if (bullets[randomNum].posy<0){
            statusActive = false;
            console.log(statusActive);
        }
        if (statusActive === false){
            bullets[randomNum].attr({
            "cx": 0,
            "cy": 0,
        });
        }  */


}

//move threats 
let touchSide = false;
i=0
while (i<numThreats){
    threats[i].xpos = threats[i].xpos + threats[i].xrate;
    threats[i].attr({
            "cx": threats[i].xpos,
            "cy": threats[i].ypos,
        });
    console.log(threats[i])
if (threats[i].xpos > dimX || threats[i].xpos < 0){
        touchSide = true;
         console.log(touchSide);
}

 
i++;
}

if (touchSide){

for (var i = 0; i < numThreats; i++){
    threats[i].xrate *= -1;
    threats[i].xpos = threats[i].xpos + threats[i].xrate;
    threats[i].ypos += 10;
    threats[i].attr({
            "cx": threats[i].xpos,
            "cy": threats[i].ypos,
        });
}}





/*for (let i = 0; i < numThreats; i++){
if (touchSide){
    threats[i].xpos *=-1;
    threats[i].ypos += threats[i].yrate;
        threats[i].attr({
            "cx": threats[i].xpos,
            "cy": threats[i].ypos,
        });
}   
}*/


/*if (touchSide){
i=0
while (i<numThreats){
        threats[i].xpos *=-1;
        threats[i].ypos += threats[i].yrate;
        threats[i].attr({
            "cx": threats[i].xpos,
            "cy": threats[i].ypos,
        });
    }
    i++;
}*/







 
   
        /*console.log("my position is " + bullet.posx + ", " + bullet.posy)*/

    shooter.attr({
        "x": shooter.xpos,
    })


}

setInterval(draw, frameLength);


//make bullet shoot out with spacebar 
   
//upon collision, delete threats 

// function that does the animation, called at the framerate 


// start the animation


