
var file = require('fs');
var http = require('http');
// pipe
var server = http.createServer(function(req,res){
    res.writeHead(200, {'ContentType':'text/plain'});
    var docluong = file.createReadStream(__dirname + '/readMe.txt', 'utf8');
    docluong.pipe(res);
});

server.listen(3333, '127.0.0.1');

console.log('server dang chay');


