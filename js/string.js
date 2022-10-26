'use strict';
console.log('string.js');
//                    10        20
//          012345678901234567890123456789
let str1 = 'Brown fox jumped over the lazy dog.';

// string ilgis
console.log('str1.length ===', str1.length);

// iskirpti dali stringo String.prototype.slice(start, end)
const firstWord = str1.slice(0, 6);
console.log('firstWord ===', firstWord);

// iskirpti viska isskyrus pirma zodi?
const allButFirstWord = str1.slice(6);
console.log('allButFirstWord ===', allButFirstWord);

// padaryti pirma zodi didziosiom raidem
console.log(firstWord.toLocaleUpperCase() + allButFirstWord);

// String.prototype.substr(start, length) nebenaudojamas naujiems projektams
// iskerpam dali stringo su pradzia ir kiek iskirpti
// gauti zodi 'over'
// const overWord = str1.substr(17, 4);
const overWord = str1.slice(17, 17 + 4);
console.log('overWord ===', overWord);

str1 = 'Brown fox jumped over the lazy dog. And in jumped again.';

// String.prototype.replace('ka', 'i ka')
// pakeisti 'jumped' i 'persoko'
const replaced1 = str1.replace('jumped', 'persoko');
console.log('replaced1 ===', replaced1);

// replace ka argumente gali naudoti regular expression
// /g - global, pakeisti visas reiksmes
const replaced2 = str1.replace(/jumped/g, 'persoko');
console.log('replaced2 /jumped/g ===', replaced2);

// /i - case insensitive, pakeisti reiksmes neziurint ar didzioji ar mazoji raide
const replaced3 = str1.replace(/jUmPeD/i, 'persoko');
console.log('replaced3 /jUmPeD/i ===', replaced3);
