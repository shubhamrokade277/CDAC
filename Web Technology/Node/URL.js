const http = require("http");
const url = require("url");

http.createServer((request, responce) => {
    //gets us the url
    console.log(request.url); 
    //gets us the url Object
    const urlOBJ = url.parse(request.url);
    console.log(urlOBJ);

}).listen(8082);