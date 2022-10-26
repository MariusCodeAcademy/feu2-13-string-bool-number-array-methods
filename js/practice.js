'use strict';
console.log('practice.js');

const proverb =
  'sesi eina po penkiu, bet tuo paciu sesi eina pries septynis. Ir sesi yra trisdesim sesi padalinta is sesiu';

const htmlEls = {
  h1: document.querySelector('h1'),
  sent1: document.querySelector('#sent1'),
};
// const h1El = document.querySelector('h1');

function changeH1() {
  const currentText = htmlEls.h1.textContent; //String methods
  const changedText = currentText.replace('methods', 'metodai');
  // irasyti atgal i elementa
  htmlEls.h1.textContent = changedText;
}

changeH1();

function changeText() {
  const currentText = htmlEls.sent1.textContent;
  const changedText = currentText.replace('until we', 'we just');
  htmlEls.sent1.textContent = changedText;
}
changeText();

changeTextContent(htmlEls.h1, 'methods', 'metodai');
changeTextContent(htmlEls.sent1, 'until we', 'we just');

function changeTextContent() {}
