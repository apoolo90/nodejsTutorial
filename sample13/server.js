//call module express
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var urlProcess = bodyParser.urlencoded({extended : false});


// phai tao 1 folder ten la views -> de file ejs trong do
app.set('view engine','ejs');

app.get('/', function(req,res){
    res.render('home');
}); 

app.get('/detail', function(req,res){  
    res.render('detail');
});

app.post('/detail', urlProcess, function(req,res) {
    console.log(req.body);
    res.render('detail-success', {data : req.body});
});

app.listen(8080);

console.log('server dang chay');


