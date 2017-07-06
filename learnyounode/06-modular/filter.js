var fs = require('fs')
var path = require('path')

module.exports = function(fd, eks, callback){
    fs.readdir(fd, function(err, data){
    if(err){
        return callback(err, null)
    }
    
    var filteredLS = []
    data.forEach(function(ls) {
        if(path.extname(ls) === "."+eks)
        {
            filteredLS.push(ls)
        }
    }, this)

    return callback(null, filteredLS)
})}