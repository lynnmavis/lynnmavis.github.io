// main.js

console.log(`yo`);
let paper = new Raphael(document.getElementById("mySVGCanvas"));
// Find get paper dimensions
let pWidth=paper.width;
let pHeight=paper.height;

let rect = paper.rect (0, 0 , pWidth, pHeight);
rect.attr({
	"fill": "black"
})


let centrePt = {
	"x" : pWidth/2,
	"y" : pHeight/2,
}

let disk = paper.circle(pWidth/2, pHeight/2, 20).attr({
	"fill":"green",
})
disk.xpos  = centrePt.x;
disk.ypos = centrePt.y;
disk.xrate = 5;
disk.yrate = 5;

	

count = 0;
let draw = function(){

let nd = paper.circle(pWidth/2, pHeight/2, 20).attr({
	"fill":"white",
})
	nd.xpos  = centrePt.x;
	nd.ypos = centrePt.y;
	nd.xrate = 5;
	nd.yrate = 5;

	count ++;
	console.log("i have " + count + " counts");


	disk.xpos += disk.xrate;
	disk.ypos += disk.yrate;
	console.log("print " + disk.xpos + " and " + disk.ypos)

	nd.attr({
		"cx": disk.xpos,
		"cy": disk.ypos,
	})


	if (disk.xpos > pWidth){
		disk.xrate = -disk.xrate
	}

	if (disk.ypos > pHeight){
		disk.yrate = -disk.yrate
	}

	if (disk.xpos < 0){
		disk.xrate = -disk.xrate;
	}

	if (disk.ypos < 0){
		disk.yrate = -disk.yrate;
	}


	nd.animate({'fill': 'blue'}, 1000, "linear", removeCircle);
	
	function removeCircle(){
		nd.remove();
	}

}

setInterval (draw, 20);


