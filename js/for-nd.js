
for (let = 1 , < 5 ; i++)
console.log(i);




\*
Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
0 - 0
0 - 4
0 - 100
574 - 815
-50 - 50
-70 - 30
*\



function positiveSum(arr) {
    let suma = arr[0] + arr[1];
    return suma;
}

console.log(positiveSum([1, 2, 3, 4, 5]), 15);
console.log(positiveSum([1, -2, 3, 4, 5]), 13);
console.log(positiveSum([]), 0);
console.log(positiveSum([-1, -2, -3, -4, -5]), 0);
console.log(positiveSum([-1, 2, 3, 4, -5]), 9);