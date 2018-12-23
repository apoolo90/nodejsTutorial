
// function express
var hienthi = function(bien) {
   return console.log("day la " + bien);
};

var hienthi2 = function(bien,bien2) {
   return console.log("day la " + bien + "_" + bien2);
};

module.exports.test = hienthi;
module.exports.test2 = hienthi2;

// cach khac
// module.exports = {
//    test : hienthi,
//    test2 : hienthi2,
// }
