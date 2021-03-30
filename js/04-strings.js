/*
Galimi variantai, kaip inicijuoti teksta:
- veingubos kabutes
- dvigubos kabutes
- backtick
*/

jei reikia "eskeipinti" (escape) kabutes, pries jas padedame back slash (\).

const vardas = 'Petras';
console.log(vardas);

const pavarde = "Petraitis";
console.log(pavarde);

const fullName = vardas + pavarde;
console.log(fullName);

const marke = 'Tesla';
const model = 'S';
const battery = '100';
const batteryUnits = 'kw'

const car = 'I wish a had ' + marke + ' model ' 
+ model + ' with a ' + battery + batteryUnits + '.';
console.log(car);


/*
const ba2 = 'I wish a had ${marke} model ${model} with a ${battery}${batteryUnits};
console.log(ba2);
*/

