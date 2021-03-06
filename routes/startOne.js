const compose = require('docker-compose');
var path = require("path");

function startService(service, api_res) {
    compose.upOne(service, { cwd: path.join(__dirname), log: true })
    .then(
        function(out) {
            if (out.err.substring(0, 15) == 'No such service') {
                api_res.json({'success' : false, 'error' : 'No such service'});
                return;   
            }
            console.log('done');
            api_res.json({'success' : true, 'error' : null});
        },
        function(err) {
            console.log(err);
            api_res.json({'success' : false, 'error' : err});
        }
    )
}

module.exports = { startService }