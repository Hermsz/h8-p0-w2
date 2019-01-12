console.log()
//Tugas1

function shoutOut() {
    return "Halo Function!" 
}
    console.log(shoutOut());

console.log()
//Tugas2

function calculateMultiply(num1, num2) {
    return num1 * num2
}

var hasilPerkalian = calculateMultiply(5,6);
console.log(hasilPerkalian);

console.log()
//Tugas3

function processSentence(name, age, address, hobby) {
    // Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogyakarta, dan saya punya hobby yaitu gaming!
    return "Nama saya " + name + ", umur saya " + age + " tahun, " + "alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby + "!"
}

var fullSentence = processSentence("Agus", 30, "Jln. Malioboro, Yogjakarta", "gaming");
console.log(fullSentence);


