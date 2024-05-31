//http mode
//making server

const http = require("http");  //http module consists of all server http related properties

const server = http.createServer((req,resp) => {    //returns server insance so catch it in const server
    //req = request process
    //resp = for writing responce
    resp.writeHead(200,{'content-type':'text/html'});  //this will go on to client (browser)

    resp.write('<h1>Hello World</h1>');
    resp.write("<h2> from server <h2>");
    resp.write("<button> click here </button>");

    resp.end("Okay Bye");

});

server.listen(9898);