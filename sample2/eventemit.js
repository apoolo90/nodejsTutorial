var sukien = require('events');
var hamxuly = require('util');

var test = new sukien.EventEmitter();
// lang nghe tin nhan
test.on('something', function(msg){
    console.log(msg);
});

// noi, gui tin nhan
test.emit('something', 'hello long');

// ----------- 

// tao doi tuong
var Person = function(name) {
    this.name = name;
}

// ke thua them su kien emit
hamxuly.inherits(Person, sukien.EventEmitter);

var james = new Person('long');
var yamada = new Person('nui');
var hanano = new Person('hoa');

// tao mang
var people = [james, yamada, hanano];

// lap mang
people.forEach(function(doituong){
    doituong.on('talk', function(msg){
        console.log(doituong.name + ' talk :' + msg);
    });
});

james.emit('talk', 'hello long');
yamada.emit('talk', 'hello long, xxx');
hanano.emit('talk', 'hello guy');
