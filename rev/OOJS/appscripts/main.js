const circle2 = { 
    xCoord: 100,
    yCoord: 100,
    radius: 50,
    colour: 'red',
    xRate: 10,
    yRate: 5};


var paper = new Raphael("centerDiv", 400, 400);
var dot = paper.circle(circle2.xCoord,circle2.yCoord,circle2.radius);

//lets be consistent and always use DOUBLE quotes in attribute names
dot.attr({
	"fill": circle2.colour,
	"stroke": "blue",
	"stroke-width": 3
});

dot.xRate = circle2.xRate;
dot.yRate = circle2.yRate;

moveButton = document.getElementById("clickMe");
moveButton.addEventListener("click",function(ev){
	//update the x and y coordinates
	var newX = dot.getBBox().cx + dot.xRate;
	var newY = dot.getBBox().cy + dot.yRate;
	// use attr to set the new x and y coordinates. remember it's a circle, so cx and cy. 
	// remember its an attr function, so the input is an object with curly braces
	//lets be consistent and always use DOUBLE quotes in attribute names
	dot.attr({"cx": newX, "cy": newY});
});