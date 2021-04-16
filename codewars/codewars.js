console.log('-----Get Planet Name By ID-----');

function getPlanetName(id){
    let name;
    switch(id){
      case 2:
        name = 'Venus'
        break;
      case 3:
        name = 'Earth'
        break;
      case 5:
        name = 'Jupiter'
        break;
    }
    
    return name;
  }

console.log(getPlanetName(2), 'Venus');
console.log(getPlanetName(5), 'Jupiter');
console.log(getPlanetName(3), 'Earth');


console.log('-----SpeedCode  - Array Madness-----');


function arrayMadness(a, b) {  
    let asum = 0;
    for (i = 0; i < a.length; i++) {
        asum += a[i] ** 2;
    }

    let bsum = 0;
    for (i = 0; i < b.length; i++) {
        bsum += b[i] ** 3;
    }

    return asum > bsum;
  }

console.log(arrayMadness([4,5,6],[1,2,3]), true);
console.log(arrayMadness([5,6,7],[4,5,6]), false);
console.log(arrayMadness([4,5,6],[3,4,5]), false);
console.log(arrayMadness([3,4,5],[2,3,4]), false);
console.log(arrayMadness([2,3,4],[1,2,3]), false);
console.log(arrayMadness([1,2,3],[0,1,2]), true);
console.log(arrayMadness([5,3,2,4,1],[15]), false);
console.log(arrayMadness([2,5,3,4,1],[3,3,3,3,3]), false);
console.log(arrayMadness([1,3,5,2,4],[2,2,2,2,2,2,2,1]), false);
console.log(arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]), true);
console.log(arrayMadness([2,4,6,8,10,12,14],[1,3,5,7,9,11,13]), false);



console.log('-----positive sum-----');



function positiveSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] > 0) {
       sum += arr[i];
     }
    }
   return sum;
   }

console.log(positiveSum([1,-2,3,4,5]),13);
console.log(positiveSum([]),0);
console.log(positiveSum([-1,-2,-3,-4,-5]),0);
console.log(positiveSum([-1,2,3,4,-5]),9);
console.log(positiveSum([1,2,3,4,5]),15);



console.log('-------Find the divisors!-------');


function divisors(integer) {

  let array = [];

   for (let i = 2; i < integer; i++) {

    if (integer % i === 0) {
      array.push(i);
    }
  }
  if (array.length ===0){
    return `${integer} is prime`
  }
  else{ 
    return array
  }
}

console.log(divisors(15), [3, 5]);
console.log(divisors(12), [2, 3, 4, 6]);
console.log(divisors(13), "13 is prime");


console.log('------Polish alphabet---------');



function correctPolishLetters (string) {

  let letter = {};

  letter ['ą'] = 'a';
  letter ['ć'] = 'c';
  letter ['ę'] = 'e';
  letter ['ł'] = 'l';
  letter ['ń'] = 'n';
  letter ['ó'] = 'o';
  letter ['ś'] = 's';
  letter ['ź'] = 'z';
  letter ['ż'] = 'z';

  let result = '';
  
  for (let i = 0; i < string.length; i++){
    if (letter[string[i]] === undefined) {
      result = result + string[i];
    } else {
      result = result + letter[string[i]];
      }
    }
    return result;
  }

  
console.log(correctPolishLetters("Jędrzej Błądziński"),"Jedrzej Bladzinski");
console.log(correctPolishLetters("Lech Wałęsa"),"Lech Walesa");
console.log(correctPolishLetters("Maria Skłodowska-Curie"),"Maria Sklodowska-Curie");




