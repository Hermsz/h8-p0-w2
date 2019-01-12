
var menit = 500
var hasilmod = menit % 60
if(hasilmod < 10) {
    console.log((Math.floor(menit/60)) + ":" + "0" + hasilmod)
} else {
    console.log((Math.floor(menit/60)) + ":" + hasilmod )
}

console.log("----Vita Answer to Konversi Menit----")

function konversiMenit(menit) {

    hasilMod = menit%60
    hasilBagi = Math.floor(menit/60)
    
    if (hasilMod < 10){
      hasilMod = '0' + hasilMod
     
    }
    
     return (hasilBagi + ':' + hasilMod ) //jangan salah!!//
     //kalo returnya didalam if berarti pas else > 10 ngga ada
     //jadi nya hasilnya undefined!!
}
console.log(konversiMenit(500))