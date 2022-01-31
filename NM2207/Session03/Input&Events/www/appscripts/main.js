/* Input and Events */

console.log("yo");

yo();

let doitButton = document.getElementById("doitButton");

let colorBox = document.getElementById("colorDisplay");

let mySlider = document.getElementById("mySlider");

doitButton.addEventListener("click", function(ev) {
	//alert("OK, button was clicked");

	let textElement = document.getElementById("userColor");
	let hColor = textElement.value;
	console.log("your hex color string is " + hColor);

	colorBox.style.backgroundColor = hColor;




});

mySlider.addEventListener("input", function(ev){
	colorBox.style.opacity = mySlider.value;

})