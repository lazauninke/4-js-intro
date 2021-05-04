console.log('-----Abbreviate a Two Word Name-----');


function abbrevName(name){
const firstLetter = name[0].toUpperCase();
let secondLetter = '';
for (let i = 1; i < name.length; i++) {
    if (name[i] === ' ') {
        i++;
        secondLetter = name[i].toUpperCase();
    }
}
        return `${firstLetter}.${secondLetter}`
}

console.log(abbrevName("Sam Harris"), "S.H");
console.log(abbrevName("Patrick Feenan"), "P.F");
console.log(abbrevName("Evan Cole"), "E.C");
console.log(abbrevName("P Favuzzi"), "P.F");
console.log(abbrevName("David Mendieta"), "D.M");



console.log('-----altERnaTIng cAsE <=> ALTerNAtiNG CaSe-----');


String.prototype.toAlternatingCase = function () {
    const line = this.toString ();

    let word = '';
    
   for (let i = 0; i < line.length; i++) {
       if (line[i] === line[i].toUpperCase()) {
       word += line[i].toLowerCase();
   }else{
        word += line[i].toUpperCase();
   }
  }

  return word;
}

console.log("hello world".toAlternatingCase(), "HELLO WORLD");
console.log("HELLO WORLD".toAlternatingCase(), "hello world");
console.log("hello WORLD".toAlternatingCase(), "HELLO world");
console.log("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
console.log("12345".toAlternatingCase(), "12345");
console.log("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E");
console.log("String.prototype.toAlternatingCase".toAlternatingCase(), "sTRING.PROTOTYPE.TOaLTERNATINGcASE");
console.log("Hello World".toAlternatingCase().toAlternatingCase(), "Hello World"); 



console.log('-----Is the string uppercase?------');

String.prototype.isUpperCase = function() {
    const letter = this.toString();
        if (letter === letter.toUpperCase()){
        return true;
        } else{
              return false;  
        }
    }

  


console.log('c'.isUpperCase(), false, 'c is not upper case');
console.log('C'.isUpperCase(), true, 'C is upper case');
console.log('hello I AM DONALD'.isUpperCase(), false, 'hello I AM DONALD not is upper case');
console.log('HELLO I AM DONALD'.isUpperCase(), true, 'HELLO I AM DONALD is upper case');
console.log('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase(), false, 'ACSKLDFJSgSKLDFJSKLDFJ not is upper case');
console.log('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase(), true, 'ACSKLDFJSGSKLDFJSKLDFJ is upper case');