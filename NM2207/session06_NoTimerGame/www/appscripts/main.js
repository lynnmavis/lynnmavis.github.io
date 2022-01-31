// Game on! No timer game

console.log("yo, I'm alive!");
let paper = new Raphael(document.getElementById("mySVGCanvas"));
// Find get paper dimensions
let pWidth=paper.width;
let pHeight=paper.height;

const maxClicks = 10;

// Start button with text on top
let startButton = paper.circle(pWidth/2, pHeight/2, 40);
let startText = paper.text (pWidth/2, pHeight/2, 'Start');

let counter;
let starttime;

startButton.attr({
	'stroke' : 'black',
	'fill' : 'green',
});


// hide/show start button
let hideStartButton = function(){
	startButton.hide();
	startText.hide();
}

let showStartButton = function(){
	startButton.show();
	startText.show();
}

//-----------------------------------------
// Create the target rect
let rectWidth = 100; 
let rectHeight = 100;
let rect1 = paper.rect(-rectWidth, -rectHeight, rectWidth, rectHeight);
rect1.attr({
	'fill': "hsl(240, 50, 50)",
    'stroke': '#3b4449',
    'stroke-width': 10,
    'stroke-linejoin': 'round',
    'opacity': .75
})

//-----------------------------------------
// Return a random integer between m and n inclusive
 
let randInt = function( m, n ) {
    let range = n-m+1;
    let frand = Math.random()*range;
    return m+Math.floor(frand);
}
//-----------------------------------------
// move the square to a random position inside the canvas play area

let moveSquareRandom = function(){
	let posX = randInt(0, pWidth-rectWidth);
	let posY = randInt(0, pHeight-rectHeight);

	rect1.attr({
		'x' : posX,
		'y' : posY
	});
}

//-----------------------------------------
// start the game, function to use as callback on button click
let start = function(){
	console.log("starting game");
	hideStartButton();

	counter=0;
	starttime = Date.now();
	console.log("the starttime of our game is " + starttime);

	moveSquareRandom();
}

startButton.node.addEventListener('click', start);




//---------------------------
// end game, call when user click reaches goal
let endGame = function(){
	console.log("game has ended");
	let totaltime = (Date.now() - starttime)/1000;

	confirm("you completed the task in " + totaltime + " seconds!");

	rect1.attr({
		'x': -rectWidth,
		'y': -rectHeight,
	})

	showStartButton();

}

let gotcha = function(ev){
	counter ++; //counter = counter + 1
	console.log("your square move count is " + counter)

	if (counter >= maxClicks) {
		endGame();
	} else {
		moveSquareRandom();
	}
}

rect1.node.addEventListener('click', gotcha);





//-----------------------------------------
// callback on square clicks. Check for end of game condition












