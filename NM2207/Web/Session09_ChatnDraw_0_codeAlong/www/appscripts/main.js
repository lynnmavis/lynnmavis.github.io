
let iosocket = io.connect();

let chatBox = document.getElementById("chatBox");
let typingBox=document.getElementById("typingBox");

let uname = prompt("Please enter your name");
uname = uname || "anon";

iosocket.on('connect', function () {
    console.log("Yo.........connected!");

    // MESSAGE PROCESSING HERE --------------
    //THIS IS WHERE YOU RECEIVE INFO FROM THE SERVER//
    iosocket.on('message', function(m) {
        
        
        if (m.datatype === "chatText"){
            console.log("the type is " + m.datatype)
            chatBox.value += m.username + ": " + m.data + "\n"; 
        };

        if(m.datatype === "drawing"){
            raphaelPath=paper.path(m.data).attr({"stroke": m.color, "stroke-width": m.strokewidth});
        }

        if(m.datatype === "cleardrawing"){
          paper.clear();  
        }



    });

    //---------------------------------------
    
    iosocket.on('disconnect', function() {
        console.log("Disconnected")
    });
});

 
// When the user is typing and hits 'return', add the 
//     message to the chat window and send the text to the server (and thus to others)
typingBox.addEventListener('keypress', function(event){
	let mymessage; // holds tet from the typingBox
	if(event.which == 13) {  // 'return' key
		event.preventDefault();

        //-----------get text, construct message object and send ------------------------------
        mymessage = typingBox.value;
        chatBox.value += uname + ": " + mymessage + "\n";
        typingBox.value="";
        //-------------------------------------------------------------
	   iosocket.send({"username": uname, "data": mymessage, "datatype": "chatText"});

    }
});


//---------------------------------------------
// Drawing chat 
//---------------------------------------------
let svgdiv=document.getElementById("svgcanvas");
var paper = new Raphael(svgcanvas);

let raphaelPath;
let pathString;
let mousePushed=false;
let hSlider=document.getElementById("Hue");
let sSlider=document.getElementById("Sat");
let lSlider=document.getElementById("Light");
let strokeWidth =document.getElementById("strokeWidth");



svgdiv.addEventListener("mousedown", function(ev){
    mousePushed=true;
    pathString="M" + ev.offsetX + "," + ev.offsetY;
    let colorString = "hsl(" + hSlider.value + "," + sSlider.value + "," + lSlider.value+")";
    raphaelPath=paper.path(pathString);
    raphaelPath.attr({'stroke':colorString, 'stroke-width': strokeWidth.value});
    
})


svgdiv.addEventListener("mousemove", function(ev){
    if (mousePushed==true){
    pathString += "L" + ev.offsetX+","+ev.offsetY;
    raphaelPath.attr({'path': pathString});
}
    
})

svgdiv.addEventListener("mouseup", function(ev){
    if (mousePushed==true){
    pathString += "L" +ev.offsetX+","+ev.offsetY; 
    raphaelPath.attr({'path': pathString});
    };

    let colorString = "hsl(" + hSlider.value + "," + sSlider.value + "," + lSlider.value+")";
    iosocket.send({"datatype": "drawing", "data": pathString, "color": colorString, "strokewidth":strokeWidth.value})

    mousePushed=false;
})

//clear
let clear=document.getElementById("clear").addEventListener("click", function(ev){
    paper.clear();
    iosocket.send({"datatype": "cleardrawing"})

})















