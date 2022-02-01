var scaling = function(smallValue){
    rMax = 350;
    rMin = 50;

    //y is sin function range
    var yMax = 1;
    var yMin = 0;

    var percent = (smallValue - yMin) / (yMax - yMin);
    scaleV = percent * (rMax - rMin) + rMin;
    //return a value between 0 and 255
    //console.log(scaleV);
    return scaleV;
};



//lets be consistent and always use DOUBLE quotes in attribute names
const circle1 = { 
    "xCoord": scaling(Math.random()),
    "yCoord": scaling(Math.random()),
    "radius": Math.floor(50*Math.random()),
    "colour": "red"};

//lets be consistent and always use DOUBLE quotes in attribute names
const circle2 = { 
    "xCoord": scaling(Math.random()),
    "yCoord": scaling(Math.random()),
    "radius": Math.floor(50*Math.random()),
    "colour": "red"};

//lets be consistent and always use DOUBLE quotes in attribute names
const circle3 = { 
    "xCoord": scaling(Math.random()),
    "yCoord": scaling(Math.random()),
    "radius": Math.floor(50*Math.random()),
    "colour": "red"};

//lets be consistent and always use DOUBLE quotes in attribute names
const circle4 = { 
    "xCoord": scaling(Math.random()),
    "yCoord": scaling(Math.random()),
    "radius": Math.floor(50*Math.random()),
    "colour": "red"};

//lets be consistent and always use DOUBLE quotes in attribute names
const circle5 = { 
    "xCoord": scaling(Math.random()),
    "yCoord": scaling(Math.random()),
    "radius": Math.floor(50*Math.random()),
    "colour": "red"};




var paper = new Raphael("centerDiv", 400, 400);


//create another circle
var dot1 = paper.circle(circle1.xCoord,circle1.yCoord,circle1.radius);
//lets be consistent and always use DOUBLE quotes in attribute names
dot1.attr({
    "fill": circle1.colour,
    "stroke": "blue",
    "stroke-width": 3
});

//create another circle
var dot2 = paper.circle(circle2.xCoord,circle2.yCoord,circle2.radius);
//lets be consistent and always use DOUBLE quotes in attribute names
dot2.attr({
    "fill": circle2.colour,
    "stroke": "blue",
    "stroke-width": 3
});

//create another circle
var dot3 = paper.circle(circle3.xCoord,circle3.yCoord,circle3.radius);
//lets be consistent and always use DOUBLE quotes in attribute names
dot3.attr({
    "fill": circle3.colour,
    "stroke": "blue",
    "stroke-width": 3
});


//create another circle
var dot4 = paper.circle(circle4.xCoord,circle4.yCoord,circle4.radius);
//lets be consistent and always use DOUBLE quotes in attribute names
dot4.attr({
    "fill": circle4.colour,
    "stroke": "blue",
    "stroke-width": 3
});


//create another circle
var dot5 = paper.circle(circle5.xCoord,circle5.yCoord,circle5.radius);
//lets be consistent and always use DOUBLE quotes in attribute names
dot5.attr({
    "fill": circle5.colour,
    "stroke": "blue",
    "stroke-width": 3
});


/*

//Notes - Date/Time 

var then_in_ms = Date.now();
var now_in_ms = Date.now();
var duration = now_in_ms - then_in_ms;

//Timer events 
-- Timer events (one-off)
setTimeout(function, milliseconds);
setTimeout(function(e){alert("Yo time!");}, 1000) where 1000ms = 1 second 

-- Timer events (periodic)
var myTicker = setInterval (function, milliseconds);
clearInterbal(myTicker); to stop periodic callbacks 

-- Timer counting example 
var tcounter = 0; //outside callback function 
var myTicker = setInterval (function(){
   tcounter++;
   console.log ("Ticker count is " + tcounter);
   if (tcounter >=10){clearInterval(myTicker);} 
}, 1000); // where 1000 ms is one second 

//////////////////////////// MATH /////////////////////
Math.PI 
Math.SQRT2
Math.abs(x) - |x|
Math.pow(x, y) - x^y
Math.cos(x) - Returns the cosine of a number 
Math.sin(x) - Returns the sine of a number 
Math.ceil(x) - Returns the smallest integer greater than or equal to a number 
Math.floor(x) - Returns the largest integer less than or equal to a number 
Math.round (x) - Returns the value of a number rounded to the nearest integer 
Math.max (x, y, ...) - Returns the largest of zero or more numbers 
Math.min (x, y, ...) - Returns the smallest of zero of more numbers 
Math.random() - Returns a pseudo random number between 0 and 1 

//Math Object Example 
when you want the function to generate a random number in [m,n], 
and Math.random() gives a number in [0,1],

var randInt = function (m, n){
    var range = n-m; 
    var frand = Math.random()*range;
    return m+Math.floor(frand);
}

////////////////////////// Arrays //////////////////////////

var movie_a = "Everest";
var movie_b = "Pan";
var movie_c = "Batman";

var movies = [];
movies[0] = "Everest";
movies[1] = "Pan";
movies[2] = "Batman";

console.log("My Movie List is " + movies);
console.log("My favourite movie is " + movies[1]);
console.log(" The number of movies is " + movies.length);

movies.sort();
console.log("My Movie List is " + movies); // alphabetical order 

var randInt = function(max){
    return Math.floor(max*Math.random());
}

var numbers = [];
numbers[0] = randInt(10);
numbers[1] = randInt(10);
numbers[2] = randInt(10);
numbers[3] = randInt(10);
numbers[4] = randInt(10);

console.log("my random numbers are ", numbers);

numbers.sort();
console.log("my random numbers SORTED are ", numbers);

/////////////////////////////// LOOPS ///////////////////////

var counter = 0;
while (counter <10){
    console.log("counter is now " + counter);
    counter++;
}

var randInt = function(max){
    return Math.floor(max*Math.random());

}

var numbers = [];
while (counter<100){
    numbers[counter] = randInt(1000);
    counter ++;
}

console.log("my long number list is " + numbers);

//////// servers //////
https://en.wikipedia.org/wiki/Main_Page where 
https: is the scheme 
en is the subdomain 
wikipedia is the domain name
.org is the top level domain 
/xxx/xx is the path 



























































*/


















































