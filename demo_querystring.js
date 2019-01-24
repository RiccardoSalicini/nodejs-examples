var http = require('http');
var url = require('url');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-type' : 'text/html'});
    var q = url.parse(req.url, true).query;
    var msg = q.year + " " + q.month;
    res.write(msg);
    res.end();
}).listen(8080);