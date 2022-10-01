/*
    Dirname, filename, path;
*/


const path = require('path');
// console.log('dirname',__dirname);
// console.log('filename',__filename);


console.log(
    // path.resolve(__filename, '..', '..', 'moduloOne', 'app.js'),
    path.resolve(__dirname, '..', 'moduloOne', 'app.js')
);