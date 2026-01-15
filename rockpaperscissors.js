let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function getComputerChoice() {
  // generate random number, from 0 <= n < 1, store it in n
  let n = Math.random();
  // determine which option to choose based off generated number
  if (1 > n && n > 0.666) {
    return "rock"
  }
  else if (0.666 >= n && n > 0.333) {
    return "paper"
  }
  else {
  return "scissors"
  }
}

function getHumanChoice() {
  // set variable to user input, then make it lowercase
  return prompt("Rock...Paper...Scissors...Shoot!").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  // check for a tie
  if (humanChoice === computerChoice) {
    return "It's a tie!"
  }
  // check win possibilities
  else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
    return "You Win!" + " " + humanSelection + " beats" + " " + computerChoice
    humanScore++
  }
  // all other scenarios are losing
  else {
    return "You Lose!" + " " + computerChoice + " beats" + " " + humanChoice
    computerScore++
  }
}
console.log(computerSelection)
console.log(humanSelection)
console.log(playRound(humanSelection, computerSelection))
