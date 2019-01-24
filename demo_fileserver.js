var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer((req, res) => {
    var q = url.parse(req.url, true);
    var filename = '.' + q.pathname;
    fs.readFile(filename, (err, data) => {
        if (err){
            res.writeHead(404, {'Content-type' : 'text/html'});
            res.end('404 File Not Found');
        }
        res.writeHead(200, {'Content-type' : 'text/html'});
        res.end(data);
    });
}).listen(8080);