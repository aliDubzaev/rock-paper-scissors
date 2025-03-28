
function getComputerChoice() {
  let choices = ['камень','бумага','ножницы']
  return choices[Math.floor(Math.random() * choices.length)]
};

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
      div.textContent = `Ничья! Пожалуйста, сыграйте занова`;
  } else if ((playerSelection === 'ножницы' && computerSelection === 'камень') 
  || (playerSelection === 'бумага' && computerSelection === 'ножницы')
  || (playerSelection === 'камень' && computerSelection === 'бумага')) {
      div.textContent = `Вы проиграли! ${computerSelection} побеждает ${playerSelection}.`;
      computerScore ++;
  } else {
      div.textContent = `Вы выиграли! ${playerSelection} побеждает ${computerSelection}.`;
      playerScore ++;
  };
  displayScore()
};

function displayScore() {
if ((playerScore < 5) && (computerScore < 5)) {
  div2.textContent = `${playerScore} : ${computerScore}`;
} else if (playerScore >= 5 || computerScore < 5) {
    div2.textContent = `Вы победили в этой битве!`;
} else if (playerScore < 5 || computerScore >= 5) {
    div2.textContent = 'Вы проиграли эту битву!';
}
}

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const div = document.querySelector('.result');
const div2 = document.querySelector('.scoreboard')

rockButton.addEventListener('click', () => {playRound('камень', getComputerChoice())});
paperButton.addEventListener('click', () => {playRound('бумага', getComputerChoice())});
scissorsButton.addEventListener('click', () => {playRound('ножницы', getComputerChoice())});

