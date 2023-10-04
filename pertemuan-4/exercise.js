//buat dengan menggunakan IIFE

let hasil = (function(angka) {
    if (angka > 0) {
        return "the number is positive";
    } else {
        return "the number is negative";
    }
})(20);

console.log(hasil);

// call back
function bil(angka, callback) {
    if (angka > 0) {
        callback("the number is positive");
    } else {
        callback("the number is negative");
    }
}

bil(20, function(hasil) {
    console.log(hasil);
});