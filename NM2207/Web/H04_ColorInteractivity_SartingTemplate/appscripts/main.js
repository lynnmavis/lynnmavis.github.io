// main.js

console.log(`yo`);

/* assign3: font family for article in JavaScript */
var art=document.getElementById("articleid").style.fontFamily = "cursive,Charcoal,sans-serif";

/* assign3: center header text using javascript */
var art=document.getElementById("headerid").style.textAlign = "center";


let hslString = function(ev){
	
	let h = Math.floor(document.getElementById("Hue").value);
	let s = Math.floor(document.getElementById("Sat").value);
	let l = Math.floor(document.getElementById("Light").value);
	let a = document.getElementById("Opa").value;

	let hslColor = "hsla(" + h + ", " + s + "%, " + l + "%, " + a + ")";
	console.log("your new hslastring is " + hslColor);
	document.getElementById("articleid").style.backgroundColor = hslColor;
	return hslColor;
}
hslString();

let hueElement = document.getElementById("Hue")
hueElement.addEventListener("change", function(ev){
	hslString()
})

let satElement = document.getElementById("Sat")
satElement.addEventListener("change", function(ev){
	hslString()
})

let lightElement = document.getElementById("Light")
lightElement.addEventListener("change", function(ev){
	hslString()
})

let opacityElement = document.getElementById("Opa")
opacityElement.addEventListener("change", function(ev){
	hslString()
})

let ab = function(ev){

	let h = Math.floor(document.getElementById("Hue").value);
	let s = Math.floor(document.getElementById("Sat").value);
	let l = Math.floor(document.getElementById("Light").value);
	let a = document.getElementById("Opa").value;


	let hslColor = "hsla(" + h + ", " + s + "%, " + l + "%, " + 1.0 + ")";
	console.log("your new hslastring is " + hslColor);
	document.getElementById("articleid").style.backgroundColor = hslColor;
	return hslColor;
}

let articleBox = document.getElementById("articleid")

articleBox.addEventListener('mousedown', ab)

articleBox.addEventListener('mouseup', hslString)


