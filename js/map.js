const list = [10, 2, 8, 4];

// gauti sarasa, kur kiekvienas skaicius yra padydintas nurodyta konstanta

const padydinti = (arr, multiplyer) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * multiplyer);
    }
    return newArr
}

// const dvygubi = padydinti(list, 2);
// console.log(dvygubi);       // [20, 4, 16, 8]

// const trygubi = padydinti(list, 3);
// console.log(trygubi);

/*******************************************************************/

const mapDvygubas = list.map(n => n * 2);
const mapTrygubas = list.map(n => n + 5);

console.log(list);
console.log(mapDvygubas);
console.log(mapTrygubas);