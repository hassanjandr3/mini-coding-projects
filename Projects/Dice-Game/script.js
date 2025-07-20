'use strict';

// calling fictions
const callQuarry = function (a) {
  return document.querySelector(a);
};

//hide
const hide = function (a) {
  a.classList.add('hidden');
};
// show
const show = function (a) {
  a.classList.remove('hidden');
};

// naming elements
const score0El = callQuarry('#score--0');
const score1El = callQuarry('#score--1');
const score0 = callQuarry('#score--0');
const score1 = callQuarry('#score--1');

const current0El = callQuarry('#current--0');
const current1El = callQuarry('#current--1');
const player0El = callQuarry('.player--0');
const player1El = callQuarry('.player--1');

const diceEl = callQuarry('.dice');
const btnNew = callQuarry('.btn--new');
const btnRoll = callQuarry('.btn--roll');
const btnHold = callQuarry('.btn--hold');

// making initial adjustment
// score0El.textContent = 0;
// score1El.textContent = 0;
// hide(diceEl);

// making new elements
// const score = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;

let score, currentScore, activePlayer;

const init = function () {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  btnHold.disabled = false;
  btnRoll.disabled = false;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  hide(diceEl);
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//

btnHold.addEventListener('click', function () {
  score[activePlayer] += currentScore;

  if (score[activePlayer] >= 100) {
    btnHold.disabled = true;
    btnRoll.disabled = true;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    hide(diceEl);
  }

  document.querySelector(`#score--${activePlayer}`).textContent =
    score[activePlayer];
  switchPlayer();
});

//

btnRoll.addEventListener('click', function () {
  let diceRoll = Math.trunc(Math.random() * 6) + 1;
  show(diceEl);
  diceEl.src = `dice-${diceRoll}.png`;

  if (diceRoll !== 1) {
    currentScore += diceRoll;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

btnNew.addEventListener('click', init);
