'use strict'

const container = document.getElementById('container');

const writeCharDelay = 180;
const clearCharDelay = 60;
const writeNewStringDelay = 600;
const foolStringWrithenDelay = 1800;

let currentStringIndex = 0;

const messagesArr = [
  'Hi!',
  'What you need is?',
  'How you can get that?',
  'So...',
  'What are you waiting for?',
  'Get it!',
  'Do it!',
  'GO GO GO !!!'
];

setTimeout(writeNewString, writeNewStringDelay, messagesArr[currentStringIndex], messagesArr[currentStringIndex].length, 0);

function writeNewString(string, stringSize, char = 0) {
  let timeout = (char === stringSize - 1) ? foolStringWrithenDelay : writeCharDelay;
  if (char < stringSize) {
    container.innerHTML += string[char];
    setTimeout(writeNewString, timeout, string, stringSize, ++char);
  } else {
    setTimeout(clearString, clearCharDelay);
  }
}

function clearString() {
  if (container.innerHTML.length) {
    container.innerHTML = container.innerHTML.slice(0, -1);
    setTimeout(clearString, clearCharDelay);
  } else {
    currentStringIndex = (currentStringIndex < messagesArr.length - 1) ? currentStringIndex += 1 : 0;
    setTimeout(writeNewString, writeNewStringDelay, messagesArr[currentStringIndex], messagesArr[currentStringIndex].length, 0);
  }
}