var paper = new Raphael("container", 2000, 2000);

var dot = paper.circle(100, 100, 50);
//lets be consistent and always use DOUBLE quotes in attribute names
dot.attr({
	"fill": "#FF0000",
	"stroke": "blue",
	"stroke-width": 3
});

var ell = paper.ellipse(200,200,50,20);
//lets be consistent and always use DOUBLE quotes in attribute names
ell.attr({
	"fill": "#FF0000",
	"stroke": "blue",
	"stroke-width": 3
});


// only my rectange properties and methods
var rec = paper.rect(200,200,100,200);

//lets be consistent and always use DOUBLE quotes in attribute names
rec.attr({
	"fill": "#FF0000",
	"stroke": "blue",
	"stroke-width": 3
});




//reshape the rectangle
rec.mouseIsDown = 0;

rec.node.addEventListener("mousedown",function(ev){
	rec.mouseIsDown =1;
});


rec.node.addEventListener("mouseup",function(ev){
	rec.mouseIsDown = 0;
});


rec.node.addEventListener("mousemove",function(ev){
	if(rec.mouseIsDown ==1)//
{
	//change width and height
	//newWidth = existing x coordinate - clientX
	//newHeight = existing y coordinate - clientY
	rec.resizeRectangle(ev);
}

});
rec.resizeRectangle = function(ev){
	//Fixed this so that newWidth and newHeight are never negative. See what happens when I remove Math.abs? Sometimes it breaks.
	newWidth = Math.abs(rec.getBBox().x - ev.clientX);
	newHeight = Math.abs(rec.getBBox().y - ev.clientY);
	rec.attr({'width': newWidth, 'height':newHeight});

};

//rectangle ends here



//only my pizzaHog properties and methods
var pizzaHog = paper.image("resources/cap.jpg",400,400,120,100);
var phCaption = paper.text(450,550,"This is a groundhog eating pizza");

pizzaHog.mouseIsDown = 0; //global scope, defined outside the function
pizzaHog.dragImage = function(ev){
	//changed clientX and clientY to offsetX and offsetY
	//added -60 (width of image/2) and -50 (height of image/2) so that it matches the position of my mouse (center and not top corner of image)
	//lets be consistent and always use DOUBLE quotes in attribute names
	pizzaHog.attr({"x": ev.offsetX-60, "y": ev.offsetY-50});
};
pizzaHog.node.addEventListener("mouseup",function(ev){
	//console.log("mouseup is triggered");
	pizzaHog.mouseIsDown=0;
});

pizzaHog.node.addEventListener("mousedown",function(ev){
	//console.log("mousedown is triggered");
	pizzaHog.mouseIsDown = 1;
});

pizzaHog.node.addEventListener("mousemove",function(ev){
	//console.log("mousemove is triggered");
	if(pizzaHog.mouseIsDown==1)
	{

		//call the drag function
		pizzaHog.dragImage(ev);
	}
	
});


//pizzahog ends here




//mouse events

//click 
	//change color (circle)
dot.node.addEventListener("click",function(ev){
	//console.log("cicle is clicked!");
	//dot.attr({"fill":"black"});
	tar = ev.target;
	tar.style.fill = "white";

});
	//disappear (ellipse)
var ellVis = 1;
ell.node.addEventListener("click",function(ev){
		//change opacity
	tar = ev.target;
	if(ellVis ==1)
	{		
		tar.style.opacity = 0;
		ellVis = 0;
	}
	else
	{
	tar.style.opacity =1;
	ellVis = 1;
	}

});


//drag : mousedown and mouseup and mousemove
	//move the image

//add listener to div element for smoother dragging
var divContainer = document.getElementById("container");

divContainer.addEventListener("mousemove",function(ev){
	console.log("mousemove is triggered");
	if(pizzaHog.mouseIsDown==1)
	{

		//call the drag function
		pizzaHog.dragImage(ev);
	}
	if(rec.mouseIsDown ==1)//
	{
	//change width and height
	//newWidth = existing x coordinate - clientX
	//newHeight = existing y coordinate - clientY
	rec.resizeRectangle(ev);
	}

	
});


divContainer.addEventListener("mouseup",function(ev){
	//console.log("mouseup is triggered");
	pizzaHog.mouseIsDown=0;
	rec.mouseIsDown=0;
});








//hover: mouseover and mouseout
	//change stroke-width
dot.node.addEventListener("mouseover",function(ev){
	
//lets be consistent and always use DOUBLE quotes in attribute names
	dot.attr({"stroke-width":3});

});



dot.node.addEventListener("mouseout",function(ev){
	//lets be consistent and always use DOUBLE quotes in attribute names
	dot.attr({"stroke-width":1});

});

//translate, scale and rotate rec
rec.node.addEventListener("click",function(ev){
	//lets be consistent and always use DOUBLE quotes in attribute names
	rec.attr({ "transform": "t-200,30s1.2r45" })

});

var isClicked=0;
pizzaHog.node.addEventListener("click",function(ev){

	if(isClicked==0)
	{
		//lets be consistent and always use DOUBLE quotes in attribute names
		pizzaHog.attr({ "src": "resources/duckling.jpg" });
		//fixed the error in setting isClicked
		isClicked = 1;
	}
	else
	{
		//lets be consistent and always use DOUBLE quotes in attribute names
		pizzaHog.attr({ "src": "resources/cap.JPG" });
		isClicked = 0;

	}
});


