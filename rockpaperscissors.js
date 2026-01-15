let humanScore = 0;
let computerScore = 0;

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
    humanScore++
    return "You Win!" + " " + humanChoice + " beats" + " " + computerChoice
  }
  // all other scenarios are losing
  else {
    computerScore++
    return "You Lose!" + " " + computerChoice + " beats" + " " + humanChoice
  }
}

function playGame (humanChoice, computerChoice) {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()
    const result = playRound(humanSelection, computerSelection)
    console.log(result)
    console.log("Player: " + humanScore + "||" + "Computer: " + computerScore)
  }
  if (humanScore > computerScore) {
    console.log("You Win! You managed to beat a semi random computer!!")
  }
  else {
    console.log("You Lose... Don't feel bad, it's a computer anyways!")
  }
}

// console.log(computerSelection)
// console.log(humanSelection)
// console.log(playRound(humanSelection, computerSelection))
playGame()
