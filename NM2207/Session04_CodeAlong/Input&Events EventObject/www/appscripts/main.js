console.log("yo");

let colorBox = document.getElementById("colorDisplay");

let cb = function(ev){
	console.log(" --- OK, got a mousedown event in colorBox");
	console.log("The target is " + ev.target);
	console.log("The id of our target element is " + ev.target.id);

	ev.target.innerHTML = "mouseX is " + ev.offsetX + ", and mouseY is " +ev.offsetY;
}

colorBox.addEventListener('mousedown' , cb)

/* OR 
colorBox.addEventListener('mousedown' , function(ev){
	console.log(" --- OK, got a mousedown event in colorBox");
}) 
*/