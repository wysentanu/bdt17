var mobil = {
    merek: "Toyota",
    nama: "Avanza",
    tahun: 2020,
    banDepan: 2,
    banBelakang: 2,
    hitungBan: function(){
        return this.banDepan + this.banBelakang
    }
}

console.log(mobil.hitungBan())

