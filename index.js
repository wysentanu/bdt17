var a = 0

function sum(a,b){
    let c = a + b
    return c
}
var hasil = sum(1,2)
console.log(hasil)

for(i=0;i<3;i++){
    console.log(i)
}

var me = {
    name: "Sentanu",
    alamat: "Tabanan",
    umur: 22
}

for(var m in me){
    console.log(`${m} adalah ${me[m]}`)
    //Petiknya disamping angka 1
}

var a = 1
//console.log(a++)
//console.log(a)

var counter = function(){
    var count = 0
    return function(){
        return ++count
    }
}

c1 = counter()
c2 = counter()
c3 = counter()

console.log()

Person = function(name, age){
    this.name = name
    this.age = age
}

var s = new Person("sentanu", 18)
console.log(s)