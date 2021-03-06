const fs = require('fs');

function readFile(file) {
    
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, contents) => {
            if (err) {
                reject(err);
            } else {
                resolve(contents);
            }
        });    
    });
}

module.exports = readFile;