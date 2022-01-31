
console.log("yo");


let greeting = function (name){
	var myGreeting = "Hello " + name + ", glad to meet you!";
	return myGreeting;
}

let name1 = "Michelle";
let name2 = "Kelvin";

var response; 

response = greeting(name1);

console.log(response);
console.log ("Ah, and is there anyone else?");

console.log(greeting(name2));




let myFunction = function(x, y) {
	console.log("Hello World I like "+ x + " more than " + y);
}

myFunction("icecream", "choco");


let sum = function(x, y){
	let result = x + y;
	return result;
}

let value = sum(1,2);