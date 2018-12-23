
var file = require('fs');

// su dung buffer va streams
var docluong = file.createReadStream(__dirname + '/readMe.txt',{ encoding : 'utf8'});
var ghiluong = file.createWriteStream(__dirname + '/writeMe.txt', {encoding: 'utf8'});

docluong.on('data', function(dulieu) {
    console.log('Doc luong : ');
    console.log(dulieu);
    ghiluong.write(dulieu);
});

// file.unlinkSync('writeMe.txt');
