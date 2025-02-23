'use strict';

// Selecting Elements
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player1 = document.querySelector('.player--1');

// Starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0]; // 2 players score store
let currentScore = 0;
let activPlayer = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display Dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. Check if dice rolled is 1
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activPlayer}`).textContent =
      currentScore;
  } else {
    // Reset current score and switch player
    document.getElementById(`current--${activPlayer}`).textContent = 0;

    currentScore = 0;
    activPlayer = activPlayer === 0 ? 1 : 0;
    player0El.classList.toggle(`player--active`);
    player1El.classList.toggle(`player--active`);
  }
});

btnHold.addEventListener(`click`, function () {
  //1. Add current score  to activ player score

  scores[activPlayer] += currentScore; // scores[1] = scores[1] + currentScore
  document.getElementById(`current--${activPlayer}`).textContent =scores[svt];

  //2. Check if player's score is >=100
  //finish game

  //Swith to the next player
});
