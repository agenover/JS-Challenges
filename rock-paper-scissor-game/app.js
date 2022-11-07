const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const userScoreDisplay = document.getElementById('user-score')
const computerScoreDisplay = document.getElementById('computer-score')
const drawScoreDisplay = document.getElementById('draw-score')
let userChoice
let computerChoice
let result
let increaseUserScore = 0
let increaseComputerScore = 0
let increasedrawScore = 0

possibleChoices.forEach(possibleChoice => {
    console.log(possibleChoice)
    return possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
    })
})

function generateComputerChoice() {
    const randomNum = Math.floor(Math.random() * possibleChoices.length + 1)
    if (randomNum === 1) {
        computerChoice =  'rock'
    } else if (randomNum === 2) {
        computerChoice = 'paper'
    } else if (randomNum === 3) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getUserScore() {
    increaseUserScore += 1
    userScoreDisplay.innerHTML = increaseUserScore
}

function getComputerScore() {
    increaseComputerScore += 1
    computerScoreDisplay.innerHTML = increaseComputerScore
}

function getDrawScore() {
    increasedrawScore += 1
    drawScoreDisplay.innerHTML = increasedrawScore
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a draw!"
        getDrawScore()
    } else if (computerChoice === "rock" && userChoice === "paper") {
        result = "You win!"
        getUserScore()
    } else if (computerChoice === "rock" && userChoice === "scissors") {
        result = "You lose!"
        getComputerScore()
    } else if (computerChoice === "paper" && userChoice === "rock") {
        result = "You lose!"
        getComputerScore()
    } else if (computerChoice === "paper" && userChoice === "scissors") {
        result = "You win!"
        getUserScore()
    } else if (computerChoice === "scissors" && userChoice === "rock") {
        result = "You win!"
        getUserScore()
    } else if (computerChoice === "scissors" && userChoice === "paper") {
        result = "You lose!"
        getComputerScore()
    }
    resultDisplay.innerHTML = result
}