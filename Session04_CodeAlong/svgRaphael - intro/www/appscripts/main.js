
console.log("yo, I'm alive!");

var paper = new Raphael(document.getElementById("mySVGCanvas"));

let line1 = paper.path("M 0,0 L 600,400");

line1.attr({
	"stroke" : "blue",
	"stroke-width" : 10,
});

	//x, y, width, height
let rect1 = paper.rect(100, 100, 150, 100);

rect1.attr({
	"fill" : "hsl(.75, .5, .5)",
	"stroke" : "#3b444F", 
	"stroke-width" : 5,
	"stroke-linejoin" : "round",
	"opacity" : .75,
});

	//cx, cy, r
let circle1 = paper.circle(450, 205, 25).attr({
	"fill" : "#F0F",
	"stroke-width" : 5,
	"stroke" : "blue",
});

	//x, y, text
let text = paper.text("250px", "50px", "A little text experiment");
text.attr({
	"font-size" : "32px", 
	"font-weight" : 800,
	"fill" : "yellow",
	"stroke" : "brown",
	"stroke-width" : "3px"
});

rect1.node.addEventListener("click", function(ev){
	console.log("got a click on our square");

})

document.getElementById("mySVGCanvas").addEventListener("click",
	function(event){
		console.log("click on the canvas, x = " + event.offsetX + ", y = " + event.offsetY);

		rect1.animate({
			"x" : event.offsetX,
			"y" : event.offsetY,
		}, 1000, "linear");
	});


