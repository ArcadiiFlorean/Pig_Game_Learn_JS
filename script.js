'use strict';

//Selecting Elements

const score0El = document.getElementById('score--0'); // scriu in doua rinduri sa pot schimba valoarea ulterior
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting contition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //1.Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //2.Display Dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3.Check for rolled if  true , swich to netx player

  if (dice !== 1) {
    //add dice t curent score

    currentScore += dice; // currentScore = currentScore+ dice;
  } else {
    //next player
  }
});
