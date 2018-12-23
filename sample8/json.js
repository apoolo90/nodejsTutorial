
var file = require('fs');
var http = require('http');

// json
var server = http.createServer(function(req,res){
    res.writeHead(200, {'ContentType':'application/json'});
    var doituong = {
        name : 'long',
        age : '28',
        nghenghiep : 'IT',
        quequan : 'quang ninh',
    };

    res.end(JSON.stringify(doituong));
});

server.listen(3333, '127.0.0.1');

console.log('server dang chay');


