var fs = require('fs');

fs.rename('myNewFile1.txt', 'myRenamedFile.txt', (err) => {
    if (err)
        throw err;
    console.log('File renamed!');
});