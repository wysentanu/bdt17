var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req, res){
    var txt = fs.createReadStream(process.argv[3])
    txt.pipe(res)
})
server.listen(process.argv[2])