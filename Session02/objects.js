// This is my objects file

let myCircle = {
	"radius" : 10,
	"color" : "blue",

	"position" : {
		"x" : 50,
		"y" : 100
	},

	"changePosition" :function(ix, iy){
		myCircle.position.x = ix;
		myCircle.position.y = iy;
	}
}

console.log ("In dot notation the value of my circle radius is "  + myCircle.radius);

console.log ("The position of my circle was initializaed to (" + myCircle.position["x"] + "," + myCircle.position["y"] + ")");

myCircle.changePosition(200, 400);

console.log (" The new value of x is " + myCircle.position["x"] + ", and the y value is now " + myCircle.position["y"]);


console.log("\n Here is a new way to combine string literals and variables using stirng templates:");

console.log(`The new value of x is  ${myCircle.position["x"]}, and the y value is now ${myCircle.position["y"]}`)

// Attribute-value pairs

let student = {
	"name": "mavis"
	"age": 12;

}

student.name 
student.age 