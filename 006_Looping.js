

//Q1. Melakukan Looping Menggunakan While

console.log("LOOPING PERTAMA")

var number = 0;
while (number < 20){
    number += 2;
    console.log(number + "- I love coding");
}

console.log("LOOPING KEDUA")

while (number > 0) {
    console.log(number + "- I will become fullstack developer");
    number -= 2;
}

//Q2. Melakukan Looping Meggunakan For

console.log("LOOPING PERTAMA")

for(var number = 2; number < 21; number += 2){
    console.log( number + "- I love coding");
}

console.log("LOOPING KEDUA")

for(var number = 20; number > 0; number -= 2) {
    console.log( number + "- I will become fullstack developer")
}

//Q3. Angka Ganjil dan Genap

console.log("contoh - ganjil genap")

for(var counter = 1; counter <= 100; counter ++) {
    if(counter%2 == 0) {
        console.log("GENAP");
    } else {
        console.log("GANJIL");
    }
} 

console.log("contoh - untuk pertambahan counter 2")

for(var counter = 1; counter <= 100; counter += 2) {
    if(counter%3 == 0) {
        console.log("3 KELIPATAN 3" );
    } else {
        console.log(" ");
    }
} 

console.log("contoh - untuk pertambahan counter 5")

for(var counter = 1; counter <= 100; counter += 5) {
    if(counter%6 == 0) {
        console.log("6 KELIPATAN 6");
    } else {
        console.log(" ");
    }
} 

console.log("contoh - untuk pertambahan counter 9")

for(var counter = 1; counter <= 100; counter += 9) {
    if(counter%10 == 0) {
        console.log("10 KELIPATAN 10");
    } else {
        console.log(" ");
    }
} 