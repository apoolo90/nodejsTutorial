
var express = require('express');

var app = express();

// phai tao 1 folder ten la views -> de file ejs trong do
app.set('view engine','ejs');

app.use('/assets',express.static(__dirname + '/lib'));

app.get('/', function(req,res){
    // res.send('this is home');
    res.render('home');
});

// app.get('/login', function(req,res){
//     res.send('this is login');
// });

// params
app.get('/content/:userId/send/:content', function(req,res){
    res.send('content have id : ' + req.params.userId + ' send content : ' + req.params.content);
});

// send files
app.get('/login', function(req,res){
    res.sendFile(__dirname +'/login.html', 'utf8');
});

// su dung ejs co the goi bien id trong html
app.get('/register/:userId', function(req,res){
    res.render('register', {id : req.params.userId});
});

app.get('/detail/:userId', function(req,res){
    var infor = {
        name : 'long',
        age : '28',
        nghenghiep : 'IT',
        quequan : 'VN',
        sothich : ['book','girl','lap trinh','tieng nhat'],
    };
    res.render('detail', {id : req.params.userId, information : infor});
});

app.listen(8080);

console.log('server dang chay');


