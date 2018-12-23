
var http = require('http');

var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type' : 'text/plain'});
    res.end('oke chay dc roi do');
});

server.listen(3333, '127.0.0.1');

console.log('server dang chay');