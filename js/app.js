// Global Variables

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
const ul = phrase.querySelector('ul');


let correct   = 0;
let incorrect = 0; //Missed

//Start Game listener and Overlay toggle

startButton.addEventListener('click', () => {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
});

//Phrases Array

const phrases = [
  'bicycle', 'tricycle', 'unicycle', 'quadricycle', 'pentacycle'
];

//getRandomPhraseArray function

function getRandomPhraseArray(arr){
  const randomItem =
    arr[Math.floor(Math.random()*arr.length)];
    const newArr = [];
//Split and Return new character array
    for (let i = 0; i < randomItem.length; i += 1) {
      newArr.push(randomItem[i]);
 }
 return newArr;
}

//addPhraseToDisplay function

function addPhraseToDisplay(arr) {
//For each character create a list item
  for ( let i = 0; i < arr.length; i += 1) {
    let li = document.createElement('li');
    li.innerHTML = arr[i];
    if (li.text != ' ') {
      li.setAttribute('class', 'letter');
    }
    ul.appendChild(li);
  }
}

//Call, Store, and Create the (arr)gument

const phraseArray = getRandomPhraseArray(phrases);
addPhraseToDisplay(phraseArray);
