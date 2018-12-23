
var express = require('express');

var app = express();

// phai tao 1 folder ten la views -> de file ejs trong do
app.set('view engine','ejs');

app.get('/', function(req,res){
    res.render('home');
}); 

app.get('/detail', function(req,res){
    console.log(req.query); // /detail?name=long&sdt=09100002313
    res.render('detail' ,{ data : req.query});
});

app.listen(8080);

console.log('server dang chay');


