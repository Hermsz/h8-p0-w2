

console.log()
//Q1. Menyusun Barisan Bintang

for( var i = 0; i < 5; i++ ) {
    string = ""
    string += "*"
    console.log(string)
}

console.log()
//Q2. Menyusun Barisan Bintang Dengan Nested Looping

for(var j = 0; j < 5; j++) {
    var string = ""
    for( var k = 0; k < 5; k++ ) {
        string += "*"
    }
    console.log(string)
}

console.log()
//Q3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var string = ""
for(var l = 0; l < 5; l++) {
    string += "*";
    console.log(string);
}
