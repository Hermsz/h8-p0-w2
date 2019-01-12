
function xo(str) {
    counterx = 0
    countero = 0
    for( i = 0; i <= str.length - 1; i++) {
        if( str[i] === "x") {
            (counterx += 1)
        }   else {
            (countero += 1)
        }
    } if (counterx === countero) {
        return ("true");
    } else {
        return ("false");
    }
}
console.log(xo("xoxoxoo"))
