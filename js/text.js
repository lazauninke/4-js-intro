// is duoto teksto gauti pirma raide

const firstLetter = text => text[0];

console.log(firstLetter('Labas'));
console.log(firstLetter('rytas'));


// skaiciu vidurkis sarase (a.k.a. pazymiu vidurkis)

const vidurkis = list => list.reduce((t, n) => t + n, 0) / list.length;

console.log(vidurkis([2, 8]));