'use strict';
console.log('practice.js');

const proverb =
  'sesi eina po penkiu, bet tuo paciu sesi eina pries septynis. Ir sesi yra trisdesim sesi padalinta is sesiu';

const htmlEls = {
  h1: document.querySelector('h1'),
};
// const h1El = document.querySelector('h1');

function changeH1() {
  const currentText = htmlEls.h1.textContent; //String methods
  const changedText = currentText.replace(/MeThods/i, 'metodai');
  // irasyti atgal i elementa
  htmlEls.h1.textContent = changedText;
}

changeH1();
