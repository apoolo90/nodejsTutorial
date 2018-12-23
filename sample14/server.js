//call module express
var express = require('express');
var controller = require('./controller/todoController');

var app = express();

// phai tao 1 folder ten la views -> de file ejs trong do
app.set('view engine','ejs');

app.use(express.static('public'));

controller(app);

app.listen(8080);

console.log('server dang chay');


