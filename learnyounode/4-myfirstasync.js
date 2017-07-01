var fs = require('fs')

fs.readFile(process.argv[2], function(err, cb){
    if(err){
        console.log("Error")
    }
    var str = cb.toString().split('\n').length - 1
    console.log(str)
})