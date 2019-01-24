var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('demofile.html', (err, data) => {
        res.writeHead(200, {'Content-type' : 'text/html'});
        res.write(data);
        res.end();
    })
}).listen(8080);