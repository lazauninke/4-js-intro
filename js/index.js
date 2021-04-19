// iprastine funkcijos deklaracija
function suma(a, b) {
    return a + b;
}
console.log(suma(8, 5));

// anonimines funkcijos (logikos) priskirimas kintamajam
const minus = function (a, b) {
    return a - b;
}
console.log(minus(8, 5));

// arrow function (rodykline funkcija)
const multi = (a, b) => {
    return a * b;
}
console.log(multi(8, 5));

// arrow function, kai logikos tera viena operacija (viena eilute kodo)
// galima nerasyti {} ir return
const divide = (a, b) => a / b;
console.log(divide(8, 5));

// arrow function, kai gaunamas tik vienas parametras
// galima nerasyti () parametru dalyje
const kvadratu = a => a * a;
console.log(kvadratu(8));