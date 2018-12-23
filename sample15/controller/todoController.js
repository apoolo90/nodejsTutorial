var bodyParser = require('body-parser');
var urlParser = bodyParser.urlencoded({extended :false});

var db = require('mongoose');

db.connect('mongodb://apoolo90:admin90@ds243084.mlab.com:43084/nodejs_db',{useNewUrlParser : true});

var todoSchema = new db.Schema({
    item : String,
});

var Todo = db.model('Todo', todoSchema);
// var testInsert = Todo({item:'go to school'}).save(function(err){
//     if(err) throw err;
//     console.log('save thanh cong');
// });

module.exports = function(app) {
    app.get('/todo',function(req,res){
        Todo.find({},function(err,data){
            if(err) throw err;
            res.render('todo',{todos : data});
        });
    });

    app.post('/todo', urlParser ,function(req,res){
        var newTodo = Todo(req.body).save(function(err,data){
            if(err) throw err;
            res.json(data);
        });
    });

    // remove todo
    app.delete('/todo/:item',function(req,res){
        console.log(req.params.item);
        Todo.deleteOne({item : req.params.item.replace(/\-/g,"")},function(err,data){
            if(err) throw err;
            res.json(data);
        });
    });
};