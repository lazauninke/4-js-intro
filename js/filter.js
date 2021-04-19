const list = [10, 2, 8, 4];

// palikti nauja sarase tik tas reiksmes, kurios didesnes uz 5
// rez: [10, 8]

const didesniUz5 = list.filter(n => n > 5);
console.log(didesniUz5);

// grazinti tik ne neigiamus skaicius

const randomNumbers = [-10, 10, -8, 0, 8, -4, 4];
const onlyPositives = randomNumbers.filter(n => n >= 0);
console.log(randomNumbers);
console.log(onlyPositives);