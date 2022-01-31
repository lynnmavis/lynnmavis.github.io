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

