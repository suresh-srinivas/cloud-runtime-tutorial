

const func = require('./handler.js');

var hrstart = process.hrtime()
  func.jsonparse(null, null, function(a,b) {});
var hrend = process.hrtime(hrstart)

console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)

