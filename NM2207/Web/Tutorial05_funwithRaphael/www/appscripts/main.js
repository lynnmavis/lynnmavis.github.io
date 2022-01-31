
console.log("yo, I'm alive!");

var paper = new Raphael(document.getElementById("mySVGCanvas"));
// Find get paper dimensions
var dimX = paper.width;
var dimY = paper.height;


//--------------------------------

//rectangle 
var bg = paper.rect(0, 0, dimX, dimY);

bg.attr({
        "stroke": "#444444",
        "stroke-width": 20,
        "fill" : "#CCAAFF"        // must be filled to get mouse clicks        
})

let rect = paper.rect(0,0, dimX, dimY);
rect.attr({
	"stroke" : "blue",
	"stroke-width" : 24,
	"fill" : "orange"
})

rect.node.addEventListener ("mousedown", 
	function(ev){ 
		console.log("mousedown event has occured")

})

//let line = paper.path (`M ${dimX/2}, ${dimY/2} L ${dimX/4}, ${dimY/4}`);
//line.attr({
	//"stroke" : "red",
	//"stroke-width" : 4,
//}); 

//line 
let line = paper.path (`M ${dimX/2}, ${dimY/2} L ${dimX/4}, ${dimY/4}`);
		line.attr({
		"stroke" : "red",
		"stroke-width" : 4,
		}); 

//circles 

let circle1 = paper.circle(dimX/2, dimY/2, 14).attr({
	"fill" : "yellow",
	"stroke-width" : 2,
	"stroke" : "black",
});

let circle2 = paper.circle(dimX/4, dimY/4, 14).attr({
	"fill" : "blue",
	"stroke-width" : 2,
	"stroke" : "black",
});



// state variable 
let mouseDown = 0;

circle2.node.addEventListener("mousedown",
	function(ev){ 
		console.log("mousedown event has occured");
		mouseDown = 1;

})

circle2.node.addEventListener("mouseup",
	function(ev){ 
		console.log("mouseup event has occured");
		mouseDown = 0;

})

circle2.node.addEventListener("mousemove", function(ev){
	if (mouseDown == 1)
	{
		circle2.attr({'cx': ev.offsetX, 'cy': ev.offsetY},);
		console.log("mouse coordinates are x = " + ev.offsetX + " and y = " + ev.offsetY)
		line.attr({
			"path" : `M ${dimX/2}, ${dimY/2} L ${ev.offsetX}, ${ev.offsetY}`
		})
	} 
	else 
	{
	}
});

rect.node.addEventListener("mousemove", function(ev){
	if (mouseDown == 1)
	{
		circle2.attr({'cx': ev.offsetX, 'cy': ev.offsetY},);
		console.log("mouse coordinates are x = " + ev.offsetX + " and y = " + ev.offsetY)
		line.attr({
			"path" : `M ${dimX/2}, ${dimY/2} L ${ev.offsetX}, ${ev.offsetY}`
		})
	} 
	else 
	{
	}
});


//animating circle1

function toBig() {
	circle1.animate({ 'cx': dimX/2, 'r': 20, 'fill': '#808000'}, 2000, "easeInOut", toSmall );
	}

function toSmall() {
	circle1.animate({ 'cx': dimX/2, 'r': 14, 'fill': 'yellow' }, 2000, "easeInOut", toBig);
	}

toBig();













//circle1.animate({ 'cx': dimX/2, 'r': 20, 'fill': '#808000'}, 2000, "easeIn" )


//let keepmoving = Raphael.animation({'cx': dimX/2, 'r': 20, 'fill': '#808000'}, 2000 ).repeat( 'easeInOut')
//circle1.animate(keepmoving)

//let infinity = Raphael.animation({'cx': dimX/2, 'r': 20, 'fill': '#808000'}, 2000 ).repeat( 'Infinity')
//circle1.animate(infinity)



//let line = paper.path (`M ${dimX/2}, ${dimY/2} L ${dimX/4}, ${dimY/4}`);
//line.attr({
	//"stroke" : "red",
	//"stroke-width" : 4,
	//"path" : `M ${dimX/2}, ${dimY/2} L ${centerX}, ${centerY}`
//}); 


//let line = paper.path (`M ${dimX/2}, ${dimY/2} L ${dimX/4}, ${dimY/4}`)
//line.attr({
	//"stroke-width" : 4,
//}); 
















