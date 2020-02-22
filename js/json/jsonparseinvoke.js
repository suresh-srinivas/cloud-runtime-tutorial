

const func = require('./handler.js');

// func.empty(null, null, function(a, b) { console.log(b);});

var fs = require("fs"); 
function getFilesizeInBytes(filename) {
    var stats = fs.statSync(filename)
    var fileSizeInBytes = stats["size"]
    return fileSizeInBytes
}

var sz = getFilesizeInBytes('./1.json');
var szM = sz/1000000;


var hrstart = process.hrtime()
var simulateTime = 5


for (i=0; i < 5000; i++) {
  func.jsonparse(null, null, function(a,b) {});
}
var hrend = process.hrtime(hrstart)

console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)
console.info('File Size', szM);
console.info('MB/sec', (szM*5000*1000)/(hrend[0]*1000+hrend[1]/1000000))

