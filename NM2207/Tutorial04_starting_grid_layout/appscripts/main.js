// main.js

console.log(`yo`);

/* assign3: font family for article in RJavaScript */
document.getElementById("articleID").style.fontFamily = "cursive,Charcoal,sans-serif";

/* assign3: center header text using javascript */
document.getElementById("headerID").style.textAlign = "center";

//notes:
// let myString = "rgb(" + 100 + "," + 30)"
//


//--------------------------------------------------------------

//1. In your javascript file,get the header element and save it in a variable.
let headerElement = document.getElementById("headerID");

//2. Create a variable that we will use as a counter and initialize it to 0.
let counter = 0;

//3 add an event listener on the header element to listen for mouse clicks it gets. 
// As the second argument to addEventListener, create a function that increases the click count,
// changes the text in the header element to read something like "OK, I have now received X clicks" (where X is the click count).
// Now make it lie: have it print out 100 times the number of actual clicks it has received.
// Now we'll break our code: Move your declaration and initialization of your counter so that it is inside the callback function.
// Now how does the counting work when you click in your browser? Why? It is *very* important to understand what is happenning and why (discuss with your partner, or ask if you are not sure.)
// Move the declaration back to a location where it funcitons properly for this task. -- //

headerElement.addEventListener("click", function(ev){
	console.log("we got a click")
	counter +=1
	//or counter = counter + 1
	headerElement.innerHTML = "OK, I have now received " + counter*100 + " clicks";

})


// 4. Now in your index.html file,add a slider to the aside element.

//5. Set attributes min,max(don't forget to quote the values)
//check your slider - how does it move?

//6. Now set the step attribute to .01
//Now how does it move?

//7. In your javascript file, get the slider from the DOM and save it in a variable.
//Create an event listener for the 'change' event that prints a message to the console. How does that work for you?
//Change the event it listens for to 'input'. How does that change the behavior?
let sliderElement = document.getElementById("slider")
sliderElement.addEventListener("input", function(ev){
	console.log("this is the input value " + sliderElement.value)
	changeColor()
})

function changeColor(){
	let red = Math.floor(document.getElementById("slider").value*255);
	let green = Math.floor(document.getElementById("slider").value*255);
	let blue = Math.floor(document.getElementById("slider").value*255);
	document.getElementById("headerID").style.backgroundColor = 'rgb('+red+','+green+','+blue+')';

}

//8. Have your slider 'click' listener callback print a message to the console with the slider value (the 'value' attribute of the slider).
//9. In your slider callback function,set the style.backgroundColor of the header element to be black (when the slider is 0), white (when the slider is 1), and shades of grey for values in between. Use the rgb() method of specifying the color.
//hint: "rgb(255,255,255)" would specify white
//another hint: you have to use integers (e.g. 45) for the color values. Floats (eg 45.3) won't work.
//yet another hint: 'Math' is a predefined object with lots of handy methods. One of them is 'floor' that takes a floating point number and returns the integer part.
// Thus Math.floor(3.1416) is equal to 3.

let action = document.getElementById("top")
action.addEventListener("change", function(ev){
	console.log("sense a change")
	document.getElementById("articleID").style.backgroundColor = "blue";

})


let action1 = document.getElementById("bottom")
action1.addEventListener("change", function(ev){
	console.log("sense a change")
	document.getElementById("articleID").style.backgroundColor = "white";

})



