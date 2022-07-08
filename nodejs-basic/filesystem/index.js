const fs = require('fs');
const path = require('path');
 
const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
};
path_file = path.resolve(__dirname, 'notes.txt');
fs.readFile(path_file, 'UTF-8', fileReadCallback);