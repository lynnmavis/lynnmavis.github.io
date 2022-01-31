let movies = [];

movies [0] = "Everest";
movies [1] = "Pan";
movies [2] = "Batman";

console.log ("my movie list is " + movies);
console.log ("My favourite movie is " + movies [2]);

console.log ("The number of movies on my list is " + movies.length);

movies.sort();
console.log("My movie list is " + movies);

let randInt = function(max){
	return Math.floor(max*Math.random());
}

let numbers = [];
numbers [0]= randInt(10);
numbers [1]= randInt(10);
numbers [2]= randInt(10);
numbers [3]= randInt(10);
numbers [4]= randInt(10);

console.log ("my random numbers are ", numbers);

numbers.sort();
console.log ("my random numbers SORTED are ", numbers);