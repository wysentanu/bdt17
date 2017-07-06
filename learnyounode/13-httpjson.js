var http = require('http')
var url = require('url')

var server = http.createServer(function(req, res){
    if(req.method == 'GET'){
        let URL = url.parse(req.url, true)
        let parsetime = URL.search
        parsetime = parsetime.replace('?iso=','')
        let date = new Date(parsetime)

        if(URL.pathname == '/api/parsetime'){
            let respon = {
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            }
            
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(JSON.stringify(respon))
        }
        else if(URL.pathname == '/api/unixtime'){
            let respon = {
                unixtime: date.getTime(),
            }
            
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(JSON.stringify(respon))
        }
    }
}).listen(process.argv[2])
