var fs = require('fs');

fs.appendFile('myNewFile1.txt', ' This is my text.', (err) => {
    if (err)
        throw err;
    console.log("Updated!");
})