function round(playerChoice, computerChoice) {
  playerChoice = prompt("Choose between Rock,Paper and Scissors").toLowerCase()
  computerChoice = getComputerChoice()
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
function getComputerChoice() {
  let random = ["rock", "paper", "scissors"]
  
  let x = Math.floor((Math.random() * random.length)) 
  
  return random[x]
}
let computerChoice
let playerChoice

//console.log(round(playerChoice, computerChoice))

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(round(playerChoice, computerChoice))
  }
}

game()




// function game() {
  //getComputerChoice()
  //   for (let i = 1; i < 3; i++) {
    // console.log(getComputerChoice())
//    //console.log(round(playerChoice, computerChoice))
//   }
// }


// console.log(round(playerChoice, computerChoice))

// console.log(round(playerChoice, computerChoice))
// console.log(round(playerChoice, computerChoice))
// console.log(round(playerChoice, computerChoice))