
var file = require('fs');
var http = require('http');
// routing nodejs
var server = http.createServer(function(req,res){

    console.log('url yeu cau :'  + req.url);

    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, {'ContentType' : 'text/html'});
        file.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);

    } else if (req.url === '/login') {
        res.writeHead(200, {'ContentType' : 'text/html'});
        file.createReadStream(__dirname + '/login.html', 'utf8').pipe(res);

    } else if (req.url === '/api/json') {
        res.writeHead(200, {'ContentType' : 'application/json'});
        var doituong = {
            name : 'long',
            age : '28',
            nghenghiep : 'IT',
            quequan : 'quang ninh',
        };
    
        res.end(JSON.stringify(doituong));

    } else if (req.url === '/404') {
        res.writeHead(404, {'ContentType' : 'text/html'});
        file.createReadStream(__dirname + '/404.html', 'utf8').pipe(res);
    }
});

server.listen(3333, '127.0.0.1');

console.log('server dang chay');


