var file = require('fs');

// tao folder
// file.mkdirSync('public');

// xoa folder
// file.rmdirSync('public');

// xoa file syns
// file.unlinkSync('public/result.txt');

// xoa file ansyns
// file.unlink('public/result.txt', function(err){
//     if(err) throw err;
//     console.log('file deleted');
// });


// tao file
file.mkdir('public', function(){
    file.readFile('test.txt',function(err,data){
        file.writeFileSync('public/result.txt',data);
    });
}); 