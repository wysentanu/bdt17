var http = require('http')

http.get(process.argv[2], function(callback){
    callback.setEncoding('utf8')
    callback.on('data', function(data){
        console.log(data)
    })
    callback.on('error', function(err){
        console.log(err)
    })
}).on('error', function(err){
    console.log(err)
})