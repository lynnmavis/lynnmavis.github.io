// load a library for creating servers
var http = require('http');

// Create the server. 
// Our callback function is called, it will be passed 2 paramters:
//    req: An object hodling the request made, and and object that
//    res: the object we use to send a response.
var server = http.createServer(function(req, res){
    res.writeHead(200, {'content-type': 'text/html'});
    res.write('<html><body style="background-color:sienna"> <h1> Hellow World </h1> </body>');
    res.end();
});

// Start the server listening on a port
server.listen(3000);

console.log ("server listening on port " + 3000);


