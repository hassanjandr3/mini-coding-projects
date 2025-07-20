'use strict';

const addStyle = function (a, b, c) {
  document.querySelector(a).style[b] = c;
};

let secreteNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secreteNumber);

let score = 20;
let highScore = 0;

const quarryChange = function (a, b, c) {
  document.querySelector(a)[b] = c;
};

const message = function (message) {
  return (document.querySelector('.message').textContent = message);
};
const newScore = function () {
  document.querySelector('.score').textContent = score;
};
const gameEnd = function (Boolean) {
  document.querySelector('.check').disabled = Boolean;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (score < 1) {
    message('game over (try again)');
  } else if (!guess) {
    message('no number');
  } else if (guess === secreteNumber) {
    quarryChange('.number', 'textContent', secreteNumber);
    message('You Win!');
    gameEnd(true);
    addStyle('body', 'backgroundColor', '#60b347');
    if (score > highScore) {
      highScore = score;
      quarryChange('.highscore', 'textContent', highScore);
    }
  } else if (guess !== secreteNumber) {
    score--;
    newScore();
    guess > secreteNumber ? message('too high') : message('too low');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secreteNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  addStyle('body', 'backgroundColor', '#222');
  quarryChange('.guess', 'value', '');
  quarryChange('.message', 'textContent', 'Start guessing...');
  gameEnd(false);
  quarryChange('.score', 'textContent', score);
  quarryChange('.number', 'textContent', '?');
});
