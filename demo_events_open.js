var fs = require('fs');
var rs = fs.createReadStream('./myNewFile3.txt');

rs.on('open', () => console.log('The file is open'));
rs.close();
rs.on('close', () => console.log('The file is close'));