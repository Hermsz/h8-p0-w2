
function balikKata(kata) {
    var tampung = " "
    for(var j=kata.length - 1; j >= 0; j--) {
        tampung += kata[j]
    }
    return tampung
}

console.log(balikKata("Hello World and Coders"))
