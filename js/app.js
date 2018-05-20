// Global Variables

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
const ul = phrase.querySelector('ul');
const keyrow = qwerty.querySelectorAll('.keyrow');
const keyboard = qwerty.getElementsByTagName('button');
const live = document.querySelector('img');
const li = live.parentNode;
const ol = li.parentNode;




let letterFound = false;
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
//Add li element to parentNode
    ul.appendChild(li);
  }
}

//Call, Store, and Create the (arr)gument

const phraseArray = getRandomPhraseArray(phrases);
addPhraseToDisplay(phraseArray);

//Keyboard addEventListener
for (let i = 0; i < keyboard.length; i += 1) {
  keyboard[i].addEventListener('click', (e) => {

//If Keyboard is clicked ID the key's letter
    let keyLetter = keyboard[i].innerHTML;

//Compare keyLetter to lisLetter with function
    checkLetter(keyLetter);
    keyboard[i].disabled = true;

  });
}

//checkLetter function

function checkLetter(keyLetter) {
  let lis = document.querySelectorAll('.letter');

  for (let i = 0; i < lis.length; i ++) {

    let lisLetter = lis[i].innerHTML;

    letterFound = false;
    if ( lisLetter == keyLetter ) {
       letterFound = true;
      lis[i].setAttribute('class', 'show');

      // return letterFound;
    }
  }


  if (letterFound == false) {

    li.removeChild(live);
    incorrect += 1;
  }

}
