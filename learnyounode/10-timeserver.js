var net = require('net')

var server = net.createServer(function(socket){
    var myDate = new Date()
    var year = myDate.getFullYear()
    var month = function(){
        if(Number(myDate.getMonth()+1) < 10){
            return '0' + Number(myDate.getMonth()+1)
        }
        else{
            return Number(myDate.getMonth()+1)
        }
    }

    var date = function(){
        if(myDate.getDate() < 10){
            return '0' + myDate.getDate()
        }
        else{
            return myDate.getDate()
        }
    }

    var hours = function(){
        if(myDate.getHours() < 10){
            return '0' + myDate.getHours()
        }
        else{
            return myDate.getHours()
        }
    }
    var minutes = function(){
        if(myDate.getMinutes() < 10){
            return '0' + myDate.getMinutes()
        }
        else{
            return myDate.getMinutes()
        }
    }

    socket.end(year + '-' + month() + '-' + date() + ' ' + hours() + ':' + minutes() + '\n','utf8')
})

server.listen(process.argv[2])