// Code and Draw (review)

console.log("Yo, I am alive!");

// Grab the div where we will put our Raphael paper
var centerDiv = document.getElementById("centerDiv");

// Create the Raphael paper that we will use for drawing and creating graphical objects
var paper = new Raphael(centerDiv);
// paper.put(raphObj) - puts Raphel elements back ona paper after it has been paper.clear()'ed
paper.put=function(gobj){paper.canvas.appendChild(gobj.node)}


// put the width and heigth of the canvas into variables for our own convenience
var pWidth = paper.canvas.clientWidth;
var pHeight = paper.canvas.clientHeight;
console.log("pWidth is " + pWidth + ", and pHeight is " + pHeight);

//------------------------------------//

// create rectangleto fill the paper to use as a background
let prect = paper.rect(0, 0, pWidth, pHeight)
prect.attr({
	"fill": "white"
})

// Task #2: draw circle 
//create a small circle at the centre of the paper 
// cx, cy, r 
let circle = paper.circle (pWidth/2, pHeight/2, 15);

// call attr function with a object consisting of attributes 
circle.attr({
	"fill" : "#00FF00",
	"stroke" : "black",

});

// Task #1.3: make the circle draggable 
//--------------
// drag an object 
//---------------
// add mousedown, mouseup, mousemove listerners to control dragging 

// create variable to remember the mouse state between function callbacks 
let mouseDown = false;

circle.node.addEventListener('mousedown', function(ev){
	mouseDown = true; 
})

prect.node.addEventListener('mousemove', function(ev){
	if (mouseDown){
		circle.attr({cx: ev.offsetX, cy: ev.offsetY});

	} 
});

circle.node.addEventListener('mouseup', function(ev){
	mouseDown = false; 
})


// Task #2.1 Draw circles where mouse is clicked 
// create new object on click 
// --- 

let circleRadius = 12; 

prect.node.addEventListener('click', function (ev){
	paper.circle(ev.offsetX, ev.offsetY, circleRadius)
	// call the connect function
	sketchMan.connect(ev.offsetX, ev.offsetY);
});

let slider1 = document.getElementById("slider1");
slider1.addEventListener('input', function(ev){
	circleRadius = 2 + 20*slider1.value;
});

// adding clear button to aside 

let clearButton= document.getElementById("clearButton");
clearButton.addEventListener('click', function(ev){
	paper.clear();
	paper.put(prect);
	paper.put(circle);

	sketchMan.init();
})

//Task #3.1 
// -------
// connecting circles with lines 
//---------



let sketchMan = {
	"oldX": pWidth/2,
	"oldY": pHeight/2,
	"connect": function(newx, newy){
		let pathString = `M ${sketchMan.oldX}, ${sketchMan.oldY} L ${newx}, ${newy}`
		console.log("Draw a path with the pathstring" + pathString);
		paper.path(pathString);
		sketchMan.oldX= newx;
		sketchMan.oldY=newy;
	}, 

	"init" : function(){
		sketchMan.oldX = pWidth/2;
		sketchMan.oldY = pHeight/2;
	}
}

console.log("foobaby")
let bar = function(b){
	console.log("barbaby")
}
console.log("bazbaby")
blah = bar;
blah ("bimbaby");

console.log(9 + "5")






























