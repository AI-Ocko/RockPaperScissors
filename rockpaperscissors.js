function getComputerChoice() {
  // generate random number, from 0 <= n < 1, store it in n
  let n = Math.random();
  // determine which option to choose based off generated number
  if (1 > n && n > 0.666) {
    console.log("Rock")
  }
  else if (0.666 >= n && n > 0.333) {
    console.log("Paper")
  }
  else if (0.333 >= n && n >=0) {
    console.log("Scissors")
  }
  else {
    console.log("Error")
  }
}

function getHumanChoice () {
  // set variable to user input
  let humanChoice = prompt("Rock...Paper...Scissors...Shoot!");
  console.log(humanChoice)
}

getComputerChoice();
getHumanChoice();
