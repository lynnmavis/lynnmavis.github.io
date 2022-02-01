

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

// Create a dot at the center of the paper
let dot = paper.circle(dimX/2, dimY/2, 50);
dot.xrate = 0.15;   // ball bounced per second in the x dimension
dot.yrate = 0.25;   // ball bounces per second in the y dimension

// give it some attributes
dot.attr({
        "stroke": "#444444",
        "stroke-width": 2,
        "fill" : "#CCAAFF"        // must be filled to get mouse clicks        
});
//===================================

let distance = function(p1, p2){
	return Math.sqrt(Math.pow(p2.x-p1.x,2)+Math.pow(p2.y-p1.y,2));
}

let shooterPt = {
    "x": dimX/2, 
    "y": dimY,
};


let graphicalShooter = paper.path (`M ${shooterPt.x}, ${shooterPt.y} L ${shooterPt.x}, ${shooterPt.y-30}`);
        graphicalShooter.attr({
        "stroke" : "blue",
        "stroke-width" : 40,
        }); 


let bullet = paper.circle (shooterPt.x, shooterPt.y, 20);
bullet.attr({
    "fill" : "black",
})

    bullet.xrate = 0;
    bullet.yrate = 0;
    bullet.posx = shooterPt.x;
    bullet.posy = shooterPt.y;


let counter=0;

graphicalShooter.node.addEventListener('click', function(){
    counter ++;
    console.log ("i am getting " + counter + " clicks");
    shoot();
})
//graphicalShooter.node.addEventListener('click', start)

let shoot = function(){
    bullet.posx = shooterPt.x;
    bullet.posy = shooterPt.y; 
    bullet.yrate = -5;
}

let circleBump = function(c1, c2){
    
    let d = distance({"x": c1.attr("cx") , "y": c1.attr("cy")  }, {"x": c2.attr("cx")  , "y": c2.attr("cy")  });
    console.log(d);

    if (d < (c1.attr("r") + c2.attr("r"))){
        console.log("colliding");
        return true;
    } else {
        console.log("not colliding");
        return false;
    }
}


//===================================

// function that does the animation, called at the framerate 
let draw = function(){
        time += frameLength;
        let a = time*2*Math.PI/(1000);
        let sa = Math.sin(dot.xrate*a);
        //console.log("sa is " + sa);
        let px = map(sa, -1, 1, 0, dimX);
        dot.attr({ cx : px});

        //let ca = Math.cos(dot.yrate*a);
        //let py = map(ca, -1, 1, 0, dimY);
        //dot.attr({ cy : py});

        bullet.posx = bullet.posx + bullet.xrate;
        bullet.posy = bullet.posy + bullet.yrate;
        bullet.attr({
            "cx": bullet.posx,
            "cy": bullet.posy,
        })
        console.log("my position is " + bullet.posx + ", " + bullet.posy)

        if (circleBump(dot, bullet)) {
            dot.attr({"fill" : "black"});
        } else {
            dot.attr({"fill": "#CCAAFF"})

        }

}

// start the animation
setInterval(draw,frameLength);

