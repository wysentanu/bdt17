var filter = require('./filter.js')

filter(process.argv[2], process.argv[3], function(err, cb){
    if(err){
        console.log(err)
    }
    cb.forEach(function(nama) {
        console.log(nama)
    }, this);
})