// These are selections for html elements so I can manipulate them later in this file
const buttons = document.querySelectorAll("button");
const resultText = document.querySelector("#result");
const scoreText = document.querySelector("#score");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  // generate random number, from 0 <= n < 1, store it in n
  let n = Math.random();
  // determine which option to choose based off generated number
  if (1 > n && n > 0.666) {
    return "rock";
  }
  else if (0.666 >= n && n > 0.333) {
    return "paper";
  }
  else {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  // check for a tie
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  }
  // check win possibilities
  else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
    humanScore++;
    return "You Win! " + humanChoice + " beats " + computerChoice;
  }
  // all other scenarios are losing
  else {
    computerScore++;
    return "You Lose! " + computerChoice + " beats " + humanChoice;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();

    const result = playRound(humanChoice, computerChoice);

    resultText.textContent = result;
    scoreText.textContent = "Player: " + humanScore + " | Computer: " + computerScore;
  });
});

