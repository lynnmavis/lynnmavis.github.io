
console.log("yo, I'm alive!");

let paper = new Raphael(document.getElementById("mySVGCanvas"));
// Find get paper dimensions
let dimX = paper.width;
let dimY = paper.height;

// maps x in  the interval [a,b] into the interval [m, n]
let map =function (x, a, b, m, n){
    let range = n-m;
    // x is 'proportion' of the way from a to b
    let proportion = (x-a)/(b-a);
    return (m + proportion*range);
}

let bg=paper.rect(0,0, dimX, dimY).attr({"fill": "lightyellow"});

//--------------------------------
// variables for controlling frame rate and speed of animated object


// Create a dot at the center of the paper



// function that does the animation, called at the framerate 
// time += frameLength

let frameLength = 1;
let time = 0;
let xrate = 3

let dot = paper.circle (dimX/2, dimY/2, 4);
dot.attr({
	"fill" : "#00FF00",
	"stroke" : "black",

});


let draw = function(){
	time += frameLength
	let a = time * 2 * Math.PI/1000;
	let sa = Math.sin(a*xrate);
	console.log(sa);
	let newpos = map(sa, -1,1, 0, dimX);
	dot.attr({
		"cx": newpos
	})
}

draw();

let myTimer = setInterval(draw, frameLength)


// start the animation

//let myTimer = setInterval(function(){
	//console.log("hello");
//}, 1000);




