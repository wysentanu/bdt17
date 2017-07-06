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

var hasil = Hasil(process.argv[2], process.argv[3].toLowerCase(), process.argv[4])
hasil != 'err' ? console.log(`Hasilnya adalah ${hasil}`) : console.log("Silahkan input dengan benar! contoh: 1 tambah 1, 2 kurang 2, 3 kali 3, 4 bagi 4, 5 pangkat 5, 6 mod 6")
