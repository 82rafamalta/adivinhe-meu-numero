'use strict';

// Gerando o número secreto (fora da função pois só ocorre 1x)
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// variável de estado
let score = 20;
let highscore = 0;

//funções base
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Verificando a entrada de dados (input field e check button)
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // para valores diferentes de números
    displayMessage('⛔ Não é um número válido');

    // quando acerta o número secreto
  } else if (guess === secretNumber) {
    displayMessage('🏆 Parabéns! Você Acertou! 🏆');
    document.querySelector('.number').textContent = secretNumber;

    // alterar o background
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // implementação do recorde
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // para valores diferentes do número secreto
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? '📉 esse número é muito alto 📉'
          : '📈 escolha um número maior 📈'
      );

      // para diminuir a pontuação do score quando o número	dado for maior
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😥 Sinto muito, você perdeu 😥');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;

      // alterar o background
      document.querySelector('body').style.backgroundColor = '#c31515';
    }
  }
});

// reiniciando o jogo (botão 'outra vez')
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('😎 Pronto pra começar? 😎');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
