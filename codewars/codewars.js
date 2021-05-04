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



console.log('--------All Star Code Challenge #18-----------');

function strCount(str, letter){  
  let strsum = 0;
    for (let i = 0; i < str.length; i++){
      if (letter === str[i]){
       strsum += 1;
  }
}
    return strsum;
}


console.log(strCount('Hello', 'o'), 1);
console.log(strCount('Hello', 'l'), 2);
console.log(strCount('', 'z'), 0);



console.log('-----Is it even?------');


function testEven(n) {
    if (n % 2 === 0) {
      return true;
    }else{
      return false;
    }
}

console.log(testEven(0), true, "testEven for 0");
console.log(testEven(0.5), false, "testEven for 0.5");
console.log(testEven(1), false, "testEven for 1");
console.log(testEven(2), true, "testEven for 2");
console.log(testEven(-4), true, "testEven for 2");



console.log('-------------');


function countSheeps(arrayOfSheep) {
  let array1 = 0;
  if (array1 === true) {
    array1 += 1;
  }
  return array1;
}

let array1 = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true ];
  
console.log(countSheeps(array1) == 17, "There are 17 sheeps in total")



console.log('--------Will you make it?--------');


const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if ((fuelLeft * mpg) >= distanceToPump) {
    return true;
  }
  return false;
};


    console.log(zeroFuel(50, 25, 2), true);
    console.log(zeroFuel(100, 50, 1), false);



console.log('------Find the Difference in Age between Oldest and Youngest Family Members-----');


function differenceInAges(ages){

let youngest = ages[0];
let oldest = ages[0];

for (let i = 1; i < ages.length; i++) {

  if (ages[i] > oldest) {
    oldest = ages[i];
  }
  if (ages[i] < youngest) {
    youngest = ages[i];
  
  }
  }

  const difference = oldest - youngest;
  return [youngest, oldest, difference];
}

console.log(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
console.log(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);



console.log('------Find the Difference in Age between Oldest and Youngest Family Members-----');


function differenceInAges (ages) {

  let max = Math.max(...ages),
      min = Math.min(...ages)
      diff = max - min
      
  return [min, max, diff]
}

console.log(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
console.log(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);




console.log('------Is he gonna survive?------');


function hero(bullets, dragons){
  if (bullets / dragons < 2){
    return false;
  }
    return true;
  }
  

//return (bullets / 2 >= dragons) ? true : false;

console.log(hero(10, 5), true);
console.log(hero(7, 4), false);
console.log(hero(4, 5), false);
console.log(hero(100, 40), true);
console.log(hero(1500, 751), false);
console.log(hero(0, 1), false);



console.log('------L1: Bartender, drinks!------');

function getDrinkByProfession(param){

  let a = param.toLowerCase ();
  let drink = '';
  if (a === 'jabroni') {drink = 'Patron Tequila'}
  else if (a === 'school counselor') {drink = 'Anything with Alcohol'}
  else if (a === 'programmer') {drink = 'Hipster Craft Beer'}
  else if (a === 'bike gang member') {drink = 'Moonshine'}
  else if (a === 'politician') {drink = 'Your tax dollars'}
  else if (a === 'rapper') {drink = 'Cristal'}
  else {return 'Beer'}
    return drink;
}


console.log(getDrinkByProfession("jabrOni"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
console.log(getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
console.log(getDrinkByProfession("prOgramMer"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
console.log(getDrinkByProfession("bike ganG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
console.log(getDrinkByProfession("poLiTiCian"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
console.log(getDrinkByProfession("rapper"), "Cristal", "'Rapper' should map to 'Cristal'");
console.log(getDrinkByProfession("pundit"), "Beer", "'Pundit' should map to 'Beer'");
console.log(getDrinkByProfession("Pug"), "Beer", "'Pug' should map to 'Beer'");



console.log('-----You Cant Code Under Pressur-----');


function doubleInteger(i) {
  i *= 2;
   return i;
 }



console.log(doubleInteger(2), 4);


function tripleTrouble(one, two, three){
  let sum = '';
  for (let i = 0; i < one.length; i++) {
    sum += one[i];
    sum += two[i];
    sum += three[i];
  }
    return sum;
 }

console.log(tripleTrouble("this","test","lock"), "ttlheoiscstk");
console.log(tripleTrouble("aa","bb","cc"), "abcabc");
console.log(tripleTrouble("Bm", "aa", "tn"), "Batman");
console.log(tripleTrouble("LLh","euo","xtr"), "LexLuthor");



console.log('-----Beginner Series #2 Clock-----');


function past(h, m, s){
  const hours = h * 3600;
  const minutes = m * 60;
  const sec = s * 1;
  return (hours + minutes + sec) * 1000;
}


console.log(past(0,1,1),61000)
console.log(past(1,1,1),3661000)
console.log(past(0,0,0),0)
console.log(past(1,0,1),3601000)
console.log(past(1,0,0),3600000)



console.log('-----Grasshopper - Summation-----');


var summation = function (num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}

console.log(summation(1), 1)
console.log(summation(8), 36)



console.log('-----Opposite number-----');

function opposite(number) {
  return (-number);
}

console.log(opposite(1), -1,)



console.log('-----Keep Hydrated!------grazina tik sveikus skaicius');

function litres(time) {
  return parseInt (time / 2);
}



console.log(litres(2), 1, 'should return 1 litre');
console.log(litres(1.4), 0, 'should return 0 litres');
console.log(litres(12.3), 6, 'should return 6 litres');
console.log(litres(0.82), 0, 'should return 0 litres');
console.log(litres(11.8), 5, 'should return 5 litres');
console.log(litres(1787), 893, 'should return 893 litres');
console.log(litres(0), 0, 'should return 0 litres');



console.log('------Area or Perimeter------');


const areaOrPerimeter = function(l , w) {
  if (l === w) {
    return (l * w);
  } else{
    return ((l + w) * 2);
  }
};

console.log(areaOrPerimeter(4 , 4) , 16);
console.log(areaOrPerimeter(6 , 10) , 32);



console.log('-----Century From Year-----');


function century(year) {
  let cent = parseInt (year / 100); 
    if ((year / 100) % 1 > 0); {
      cent += 1;
    }
      
    return cent;
}

console.log(century(1705), 18, 'Testing for year 1705');
console.log(century(1900), 19, 'Testing for year 1900');
console.log(century(1601), 17, 'Testing for year 1601');
console.log(century(2000), 20, 'Testing for year 2000');
console.log(century(89), 1, 'Testing for year 89');



console.log('-----Will there be enough space?...------');

function enough(cap, on, wait) {
  let liko = on + wait;
  if (cap >= liko) {
    return 0;
  }
  return liko - cap;
}


console.log(enough(10, 5, 5), 0);
console.log(enough(100, 60, 50), 10);
console.log(enough(20, 5, 5), 0);