// Global Variables

const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
const ul = phrase.querySelector('ul');
const keyrow = qwerty.querySelectorAll('.keyrow');
const keyboard = qwerty.getElementsByTagName('button');
const live = document.querySelectorAll('img');
const headline = document.querySelector('#overlay h2');

//Event Trackers

let incorrect = 0; //Missed

//Start Game listener and Overlay toggle

startButton.addEventListener('click', () => {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
});

//Phrases Array

const phrases = [
  'looks like rain', 'sneaky devil', 'take the bait', 'eye on the prize', 'sink or swim'
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
    if (li.textContent != ' ') {
      li.setAttribute('class', 'letter');
    } else if (li.textContent == ' ' ){
      li.setAttribute('class', 'space');
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
    let keyLetter = keyboard[i].textContent;

//Compare keyLetter to lisLetter with function
    checkLetter(keyLetter);
    keyboard[i].disabled = true;
    checkWin();
  });
}

//checkLetter function

function checkLetter(keyLetter) {
  let lis = document.querySelectorAll('.letter');
   let letterFound = false;
  for (let i = 0; i < lis.length; i ++) {

    let lisLetter = lis[i].textContent;

    if ( lisLetter === keyLetter ) {
      letterFound = true;
      lis[i].classList.add('show');
      lis[i].style.transition = 'background 1.0s ease-in-out 0s';



    }
  }
  if (letterFound === false) {
    incorrect += 1;
  }
  if (incorrect == 1) {
    live[0].style.display = 'none';
  } else if (incorrect == 2) {
    live[1].style.display = 'none';
  }else if (incorrect == 3) {
    live[2].style.display = 'none';
  } else if (incorrect == 4) {
    live[3].style.display = 'none';
  } else if (incorrect == 5) {
    live[4].style.display = 'none';
  }
  return letterFound;
}

// checkWin function

function checkWin() {
    let li = document.querySelectorAll('.letter');
    let show = document.querySelectorAll('.show');
   if (li.length === show.length){
   headline.textContent = 'Congrats...You Win!'
   overlay.style.display = 'flex';
   startButton.textContent = 'Play Again?';
   headline.classList.add('win');
   reset();

 } else if (incorrect === 5) {
      headline.textContent = 'So Sorry...You Lose!'
      overlay.style.display = 'flex';
      startButton.textContent = 'Try Again?';
      headline.classList.add('lose');
      reset();
  }
}

//Reset Game

function reset(start) {

   startButton.addEventListener('click', () =>{
     window.location = window.location
  });
}
