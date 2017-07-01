var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function(err, cb){
    if(err){
        console.log(err)
    }
    
    cb.forEach(function(ls) {
        // if(ls.includes("."+process.argv[3]))
        if(path.extname(ls) === "."+process.argv[3])
        {
            console.log(ls)
        }
    }, this)
})

