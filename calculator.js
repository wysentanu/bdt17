var Calculator = {
    pertambahan: function(a,b){
        return a + b
    },
    pengurangan: function(a,b){
        return a - b
    },
    perkalian: function(a,b){
        return a * b
    },
    pembagian: function(a,b){
        return a / b
    },
    modulus: function(a,b){
        return a % b
    },
    kuadrat: function(a,b){
        return Math.pow(a,b)
    },
    akar: function(a){
        return Math.sqrt(a)
    },
    nilaiTengah: function(a,b){
        return (a+b)/2
    },
    nilaiTotal: function(a){
        var hasil = 0
        for(var x of a){
            hasil+=x
        }
        return hasil
    },
    nilaiRataRata: function(a){
        var hasil = 0
        for(var x of a){
            hasil+=x
        }
        return hasil/a.length
    }
}

console.log(`Hasil 4 ditambah 2 adalah ${Calculator.pertambahan(4,2)}`)
console.log(`Hasil 4 dikurang 2 adalah ${Calculator.pengurangan(4,2)}`)
console.log(`Hasil 4 dikali 2 adalah ${Calculator.perkalian(4,2)}`)
console.log(`Hasil 4 dibagi 2 adalah ${Calculator.pembagian(4,2)}`)
console.log(`Hasil 4 mod 2 adalah ${Calculator.modulus(4,2)}`)
console.log(`Hasil 4 pangkat 2 adalah ${Calculator.kuadrat(4,2)}`)
console.log(`Hasil akar 4 adalah ${Calculator.akar(4)}`)
console.log(`Hasil nilai tengah 4 dan 2 adalah ${Calculator.nilaiTengah(4,2)}`)

var arr = [3,3,6]
console.log(`Nilai total dari array [3,3,6] adalah ${Calculator.nilaiTotal(arr)}`)
console.log(`Nilai rata-rata dari array [3,3,6] adalah ${Calculator.nilaiRataRata(arr)}`)