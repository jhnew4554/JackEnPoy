const computerChoice = getComputerChoice()
let playerChoice = null
function getComputerChoice() {
  let random = Math.floor(Math.random() * 3) + 1 
 if (random == 1) {
    return "rock"
  } else if (random == 2) {
    return "paper"
  } else if (random == 3) {
    return "scissors"
  } else {
    return "error"
  }
 return random
//console.log(random)

}



function round(playerChoice, computerChoice) {
  playerChoice = prompt("Choose between Rock,Paper and Scissors").toLowerCase()
  console.log(computerChoice)
  if (playerChoice === "rock" && computerChoice === "rock") {
    return "tie"
  } else if (playerChoice === "paper" && computerChoice === "paper") {
    return "tie"
  } else if (playerChoice === "scissors" && computerChoice === "scissors") {
    return "tie"
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    return "You lose"
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    return "You win"
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    return "You win"
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    return "You lose"
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    return "You win"
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    return "You lose"
  } else {
    return "may male"
  }
  
}
function game() {
 
  for (let i = 1; i < 3; i++) {
console.log(getComputerChoice())
   //console.log(round(playerChoice, computerChoice))
  }
}


console.log(round(playerChoice, computerChoice))

/*console.log(round(playerChoice, computerChoice))
console.log(round(playerChoice, computerChoice))
console.log(round(playerChoice, computerChoice))*/