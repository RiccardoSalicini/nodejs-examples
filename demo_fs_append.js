var fs = require('fs');

fs.appendFile('myNewFile1.txt', 'Hello content!', (err) => {
    if (err)
        throw err;
    console.log("Saved!");
})