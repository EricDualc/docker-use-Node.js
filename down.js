const compose = require('docker-compose');
var path = require("path");

compose.down({ cwd: path.join(__dirname), log: true })
  .then(
    () => { console.log('done')}, 
    err => { console.log('something went wrong:', err.message)}
  );