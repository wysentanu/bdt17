var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function(res){
    res.pipe(bl(function(err, cb){
        if(err){
            console.log(err)
        }
        cb = cb.toString()
        console.log(cb.length)
        console.log(cb)
    }))
})