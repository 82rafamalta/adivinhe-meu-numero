'use strict';

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ Digite um Número ⛔');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Acertou! 🎉');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess < secretNumber ? '☝ Muito baixo! ☝' : '👇 Muito alto! 👇'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage = '😭 Você perdeu! 😭';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  score = 20;

  displayMessage('Vamos começar...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
