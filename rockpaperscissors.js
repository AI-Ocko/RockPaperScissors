function getComputerChoice() {
  let n = Math.random();
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

getComputerChoice();
