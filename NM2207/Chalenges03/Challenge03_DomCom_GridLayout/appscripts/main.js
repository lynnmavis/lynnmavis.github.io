// main.js

console.log(`yo`);

let main = document.getElementById("main");

main.innerHTML = "Hello! Welcome to Mavis' NM2207 webpage :)"; 

let foo = function(a, b) {
	console.log("function foo is running");
	let result = a-b;
	return result;
}

let x = 100;
let y = 7;

foo(x, y);

main.innerHTML = "The difference between " + x +  " and " + y + " is " + foo(x, y);



let multi = function(a, b) {
	console.log("function foo is running");
	let result = {
		"sum" : a+b,
		"difference" : a-b,
		"product" : a*b,
	}
	
	return result;
}

let myObj = multi (x, y);
console.log(myObj);

main.innerHTML += "<br>" + "The sum of " + x + " and " + y + " is " +  myObj.sum;
main.innerHTML += "<br>" + "The difference of " + x + " and " + y + " is " +  myObj.difference;
main.innerHTML += "<br>" + "The product of " + x + " and " + y + " is " +  myObj.product;

let point1 = {
	"x" : 2, 
	"y" : 4
}
let point2 = {
	"x" : 1,
	"y" : 3
}

let pointsum = function (a, b) {
	let result = {
		"x" : a.x + b.x,
		"y" : a.y + b.y
	}
	return result;
}

let value = pointsum(point1, point2); 
main.innerHTML += `<br><br> The sum between my points is ${JSON.stringify(pointsum (point1, point2))}`;










