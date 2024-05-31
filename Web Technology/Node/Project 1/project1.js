const url = require("url");
const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    const path = req.url

    if (path == '/about') {
        console.log("about page")
        res.writeHead(200,{
            "content-type":"text/html",
        });
        const fileContent = fs.readFileSync('./about.html')
        res.write(fileContent);
        res.end();
    }

    else if (path == "/") {
        console.log("home page")
        res.writeHead(200,{
            "content-type":"text/html",
        });
        const fileContent = fs.readFileSync('./home.html')
        res.write(fileContent);
        res.end();
    }

    else if (path == "/service") {
        console.log("service page")
        res.writeHead(200,{
            "content-type":"text/html",
        });
        const fileContent = fs.readFileSync('./services.html')
        res.write(fileContent);
        res.end();
    }

}).listen(8082);