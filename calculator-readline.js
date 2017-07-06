const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var Hasil = function(x, y, z){
    switch(y){
        case 'tambah':
            return x + z

        case 'kurang':
            return x - z

        case 'kali':
            return x * z

        case 'bagi':
            return x / z
            
        case 'pangkat':
            return Math.pow(x,z)
            
        case 'mod':
            return x % z
            
        default:
            return 'err'
    }
}

rl.on('line', (line) =>{
    console.log("\u001B[2J\u001B[0;0f") //clear
    line = line.toLowerCase()
    if(line != 'exit'){
        var str = line.split(" ")
    
        var hasil = Hasil(Number(str[0]), str[1], Number(str[2]))
        console.log(line)
        hasil != 'err' ? console.log(`Hasilnya adalah ${hasil}. Ketik 'exit' untuk keluar dari program\n`) : console.log("Silahkan input dengan benar! contoh: 1 tambah 1, 2 kurang 2, 3 kali 3, 4 bagi 4, 5 pangkat 5, 6 mod 6\n")
    }
    else{
        rl.close()
    }
})