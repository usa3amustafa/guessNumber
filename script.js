'use strict';

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const guessNumber = document.querySelector('.guess');
const message = document.querySelector('.message');
const scoreT = document.querySelector('.score');
const number = document.querySelector('.number');
let highScore = document.querySelector('.highscore');
let score = 20;
let randomNumber;

//random number function
const randomNumberGen = () => {
  randomNumber = Math.floor(Math.random() * 20 + 1);
  console.log(randomNumber);
};

// reset function
const reset = () => {
  randomNumberGen();
  guessNumber.value = '';
  number.textContent = '?';
  number.style.width = '15rem';
  document.body.style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  score = 20;
  scoreT.textContent = score;
  // display check button
  checkBtnf('block');
};

// display message
const displayMessage = messageA => {
  message.textContent = messageA;
};

// check button
const checkBtnf = property => {
  checkBtn.style.display = property;
};

// game over
const gameOver = () => {
  displayMessage('😟 You have lost the game');
  scoreT.textContent = 0;
  checkBtnf('none');
};

// decrease score
const decreaseScore = () => {
  score--;
  scoreT.textContent = score;
};

randomNumberGen();

// click event on check button
checkBtn.addEventListener('click', function () {
  // if there is no number
  if (!guessNumber.value) {
    displayMessage('⛔ No Number');
    // if player wins
  } else if (randomNumber === Number(guessNumber.value)) {
    document.body.style.backgroundColor = '#60b347';
    number.textContent = randomNumber;
    number.style.width = '30rem';
    displayMessage('🎉 Correct Number');
    checkBtnf('none');
    // if current score is greater then high score
    score > highScore.textContent
      ? (highScore.textContent = score)
      : (highScore.textContent = highScore.textContent);
  }
  // if guessed number is low
  else if (Number(guessNumber.value) < randomNumber) {
    // if score is greater than zero
    if (score > 1) {
      displayMessage('👇🏻 Too Low');
      decreaseScore();

      // if score is zero
    } else {
      gameOver();
    }
  } else if (Number(guessNumber.value) > randomNumber) {
    // if guessed number is low
    if (score > 1) {
      displayMessage('☝🏻 Too HIGH');
      decreaseScore();

      // if score is zero
    } else {
      gameOver();
    }
  }
});

// again button
againBtn.addEventListener('click', function () {
  reset();
});
