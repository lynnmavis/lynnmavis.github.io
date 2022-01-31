
let counter = 0;
while(counter < 10){
	console.log("counter is now " + counter);
	counter ++;
}





let randInt = function(max){
	return Math.floor(max*Math.random());
}

let numbers = [];
let counter = 0;

while (counter < 100){
	numbers[counter] = randInt(1000);
	counter++;
}

console.log ("my long number list is " + numbers);

