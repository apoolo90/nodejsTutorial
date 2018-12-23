var bodyParser = require('body-parser');
var urlParser = bodyParser.urlencoded({extended :false});

var data = [
    {item : 'go to school'},
    {item : 'go to movie'},
    {item : 'go to out'},
];

module.exports = function(app) {
    app.get('/todo',function(req,res){
        res.render('todo', {todos : data});
    });

    app.post('/todo', urlParser ,function(req,res){
        data.push(req.body);
        res.json(data);
    });

    app.delete('/',function(req,res){
        
    });
};