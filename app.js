function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3)

  if (randomChoice === 0) {
    return 'rock'
  } else if (randomChoice === 1) {
    return 'paper'
  } else {
    return 'scissors'
  }
}
console.log(getComputerChoice())

function getPlayerChoice() {
  let playerChoice = prompt('Rock, Paper, Scissors')
  return playerChoice
}

function playRound(playerSelection, computerSelection) {
  let playSelectionLower = playerSelection.toLowerCase()

  if (playSelectionLower === computerSelection) {
    return "It's a tie"
  } else if (playSelectionLower === 'rock' && computerSelection === 'paper') {
    return 'You lose! Paper beats Rock'
  } else if (
    playSelectionLower === 'rock' &&
    computerSelection === 'scissors'
  ) {
    return 'You win! Rock beats Scissors'
  } else if (playSelectionLower === 'paper' && computerSelection === 'rock') {
    return 'You win! Paper beats Rock'
  } else if (
    playSelectionLower === 'paper' &&
    computerSelection === 'scissors'
  ) {
    return 'You lose! Scissors beats Paper'
  } else if (
    playSelectionLower === 'scissors' &&
    computerSelection === 'rock'
  ) {
    return 'You lose! Rock beats Scissors'
  } else if (
    playSelectionLower === 'scissors' &&
    computerSelection === 'paper'
  ) {
    return 'You win! Scissors beats Paper'
  }
}
const playerSelection = 'rock'
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection))

function game() {
  let results
  for (let i = 0; i < 5; i++) {
    let playerSelection = getPlayerChoice()
    let computerSelection = getComputerChoice()
    results = playRound(playerSelection, computerSelection)

    console.log(results)
  }
  return results
}
console.log(game())
