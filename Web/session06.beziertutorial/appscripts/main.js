
console.log("yo, I'm alive!");

var paper = new Raphael(document.getElementById("mySVGCanvas"));
// Find get paper dimensions
var dimX = paper.width;
var dimY = paper.height;


//------------------------------------------
// Careate a rectangle with the same dimensions as the canvas and save it in the variable bg
var bg = paper.rect(0, 0, dimX, dimY);

// Set some background rectangle attributes
bg.attr({
"stroke": "#444444",
"stroke-width": 20,
"fill" : "#CCAAFF"        // must be filled to get mouse clicks        
})

// add mousedown listener that prints to console (but only if the rectangle was filled)
bg.node.addEventListener("mousedown", function(ev){
console.log("mouse down on paper")
});


//====================
// Challenge code below
//====================

//let myCircle = paper.circle(200,200,30).attr({"fill" : "blue"});
//let mouseState = "up";
//myCircle.node.addEventListener("mousedown", function(ev){
	//mouseState = "down"
	//console.log("mousedown detected, state is " + mouseState)
//})

//myCircle.node.addEventListener("mouseup", function(ev){
	//mouseState = "up"
	//console.log("mousedown detected, state is " + mouseState)
//})

//myCircle.node.addEventListener("mousemove", function(ev){
	//if (mouseState === "down"){
		//myCircle.attr({
			//"cx" : ev.offsetX,
			//"cy" : ev.offsetY
		//})
	//}
//})



let mkCircle = function(x, y, r, f){
	let newcircle = paper.circle(x, y, r).attr({"fill": f }); 
	console.log("the attributes of circle is " + newcircle);
	
	newcircle.node.raphcircle = newcircle;

	newcircle.node.addEventListener("mousedown",
	function(ev){ 
		console.log("mousedown event has occured");
		newcircle.mousedown = true;
	})

	newcircle.node.addEventListener("mouseup",
	function(ev){ 
		console.log("mouseup event has occured");
		newcircle.mousedown = false;
	})

	newcircle.node.addEventListener("mousemove", function(ev){
	if (newcircle.mousedown == true)
	{
		newcircle.attr({'cx': ev.offsetX, 'cy': ev.offsetY},);
		console.log("mouse coordinates are x = " + ev.offsetX + " and y = " + ev.offsetY)
		mypath.attr({
			"path" : make3ptpathstring(c1, c2, c3)
		})
	} 

});

	return newcircle;
}

let c1 = mkCircle (200,200,25, "yellow")
let c2 = mkCircle (250,350,25, "red")
let c3 = mkCircle (100,100,25, "blue")

console.log (`c1: x is ${c1.attr("cx")}, y is ${c1.attr("cy")}, r is ${c1.attr("cr")}, f is ${c1.attr("cr")}`)

function make3ptpathstring(circle1, circle2, circle3){
	let newpath = `M ${circle1.attr("cx")}, ${circle1.attr("cy")} Q ${circle2.attr("cx")}, ${circle2.attr("cy")} ${circle3.attr("cx")}, ${circle3.attr("cy")}`	
	console.log(newpath);
	return newpath;
}

let mypath = paper.path(make3ptpathstring(c1, c2, c3));

mypath.animate({
		"path": make3ptpathstring(c1,c2,c3)})














let myObj = {
	"x" : 10,
	"y" : 20
}

console.log(myObj);
myObj.z = 30;
console.log(myObj)







