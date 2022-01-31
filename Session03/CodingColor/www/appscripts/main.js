/* Coding Color */

console.log("yo");

// very useful DOM method: getElementById  - works for any element to which you gave an id
let box = document.getElementById("colorSpec");
let colorBox = document.getElementById("colorDisplay");

// What all can we do with an HTML element object? See: http://www.w3schools.com/jsref/dom_obj_all.asp
box.innerHTML="Yeehaw!";
// colorBox.style.backgroundColor="green";

//colorBox.style.backgroundColor="#FF0000";

//colorBox.style.backgroundColor="rgb(100,0,200)";

//colorBox.style.backgroundColor="hsl(40, 50%, 50%)";


// colorBox.style.backgroundColor= "rgb(" + 0 + "," + 50 "," + 100 + ")";



let makeColorString = function(ir, ig, ib){
	let colorString  = "rgb(" + ir + "," + ig + "," + ib + ")";
	console.log("your new colorstring is " + colorString);
	return colorString;
}

colorBox.style.backgroundColor = makeColorString (25, 50, 120);

