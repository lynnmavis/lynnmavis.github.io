

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
let frameLength=20; // in ms, used for the interval at which we call the draw() function
let time = 0;      // time since the page was loaded into the browser; incremented in draw()

// Create an array of threats 

let threats = [];
i=0
while (i<7){
    console.log(i);
    threats[i] = paper.circle(i*120+120, dimY/4, 40);
    threats[i].xpos = i*80+80;
    threats[i].ypos = dimY/4;
    threats[i].xrate = 0.15;   
    threats[i].yrate = 0.25; 
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
    shooter.ypos=dimY/40;

let shooterSpeed = 20;

let bullet = paper.circle (dimX/2, dimY, 20);
bullet.attr({
    "fill" : "black",
})

    bullet.xrate = 0;
    bullet.yrate = 0;
    bullet.posx = shooter.xpos+20;
    bullet.posy = dimY;

let bullets = [];
i=0;
while (i<bullets.length){
    bullets[i] = paper.circle (dimX/2, dimY, 20);
    bullets[i].posx = dimX/2;
    bullets[i].posy = dimY;
    bullets[i].xrate = 0;
    bullets[i].yrate = 0;
    bullets[i].attr({
    "fill" : "black",
    })
    bullets[i].color = "black";
    
    i++;
}

function moveRight(){
   shooter.xpos+=shooterSpeed;
   console.log(shooter.xpos)
   if (shooter.xpos+40>dimX){ 
    shooter.xpos=dimX-40
}
}
    
function moveLeft(){
    shooter.xpos-=shooterSpeed;
   console.log(shooter.xpos)
   if (shooter.xpos-20<0){ 
    shooter.xpos=0
}
}

function shootBullet(){
    bullet.posx = shooter.xpos;
    bullet.posy = shooter.ypos;
    bullet.yrate = -5;
    bullets.push(bullet);

}

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

let draw = function(){
    time+=frameLength;

        bullet.posx = bullet.posx + bullet.xrate;
        bullet.posy = bullet.posy + bullet.yrate;
        bullet.attr({
            "cx": bullet.posx,
            "cy": bullet.posy,
        })
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


