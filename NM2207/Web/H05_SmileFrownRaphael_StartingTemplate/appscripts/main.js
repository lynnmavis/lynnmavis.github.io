/* Smile/ Frown with Raphael Graphics */

console.log("yo, I'm alive!");

var paper = new Raphael(document.getElementById("mySVGCanvas"));
// Find get paper dimensions
var dimX = paper.width;
var dimY = paper.height;


//-------------------------------//
// Create background rectangle 
let bg = paper.rect(0, 0, dimX, dimY).attr({
	"fill" : "white"
});
let mouth = paper.path (`M ${dimX/3}, ${2*dimY/4} Q ${dimX/2}, ${2*dimY/3} ${2*dimX/3}, ${2*dimY/4}`);

// Toggle button 
let toggle = "frown"

let togglebutton = document.getElementById("togglebutton")
togglebutton.addEventListener("click", function(ev){
	if (toggle == "frown"){
		toggle = "smile";
		togglebutton.innerHTML = "SMILE" 
		togglebutton.style.color = "DarkSlateGray"
		togglebutton.style.fontWeight = "bold"
		togglebutton.style.backgroundImage = "url(https://images.unsplash.com/photo-1501419737817-eadda6b445e3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80)";
		mouth.attr({
			"path" : drawMouth( dimX/2, dimY/3, 400)
		})
		lefteye.animate({ry: 5}, 400)
		righteye.animate({ry: 5}, 400)

	}
	else {
		toggle = "frown"
		togglebutton.innerHTML = "FROWN"
		togglebutton.style.color = "white"
		togglebutton.style.backgroundImage = "url(https://images.unsplash.com/photo-1516619533489-577675d1553a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1268&q=80)";
		mouth.attr({
			"path" : drawMouth(dimX/2 , 2*dimY/3, 400)
		})
		lefteye.animate({ry: 20}, 400)
		righteye.animate({ry: 20}, 400)
	}
})

//where bx by are coordinates, t rep duration of animation
function drawMouth (bx, by, t){
	let mouthString = `M ${dimX/3}, ${2*dimY/4} Q ${bx}, ${by} ${2*dimX/3}, ${2*dimY/4}`;
	mouth.animate({"path": mouthString}, t)
	console.log(mouthString);
	dot.animate({'cx': bx, 'cy': by});
	return mouthString;
}

// for smile 
let lefteye = paper.ellipse(250, 125, 20, 20);
let righteye = paper.ellipse(350, 125, 20, 20);

// for frown
//let lefteye = paper.ellipse(250, 200, 20, 5);
//let righteye = paper.ellipse(350, 200, 20, 5);

//bezier curve dot 
let dot = paper.circle( dimX/2, 2*dimY/3, 10).attr({
	"fill":"coral"
})

let mouseDown = 0;

dot.node.addEventListener("mousedown",
	function(ev){ 
		console.log("mousedown event has occured");
		mouseDown = 1;

})

dot.node.addEventListener("mouseup",
	function(ev){ 
		console.log("mouseup event has occured");
		mouseDown = 0;

})

bg.node.addEventListener("mousemove", function(ev){
	if (mouseDown == 1)
	{
		dot.attr({'cx': ev.offsetX, 'cy': ev.offsetY});
		console.log("mouse coordinates are x = " + ev.offsetX + " and y = " + ev.offsetY)
		mouth.attr({
			"path" : `M ${dimX/3}, ${2*dimY/4} Q ${ev.offsetX}, ${ev.offsetY} ${2*dimX/3}, ${2*dimY/4}`
		})
	} 
	else 
	{
	}
});

//how to animate the mouth
//how to add third parameter


