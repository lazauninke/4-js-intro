// ... spread/rest operator

/*
funkcija gauna neribota kieki parametru ir reikia pasakyti, kokia reiksme yra vidurianiame parametre
pvz:
func(1, 2, 3) -> 2
func(1, 2, 3, 4, 5) -> 3
func(1, 2, 3, 4) -> 3
*/
function vidurinisSkaicius(...x) {
    return x[Math.floor(x.length / 2)];
}

const vid1 = vidurinisSkaicius(1, 2, 3);
const vid2 = vidurinisSkaicius(1, 2, 3, 4, 5);
const vid3 = vidurinisSkaicius(4, 5, 6, 7);

console.log(vid1, '->', 2);
console.log(vid2, '->', 3);
console.log(vid3, '->', 6);