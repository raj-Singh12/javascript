function getComputerChoice() {
    const rpsChoice = ['Rock', 'Paper', 'Scissors']
    const randomChoice = Math.floor(Math.random() * 3)
    return rpsChoice[randomNumber]
}


function getResult(playerChoice, computerChoice) {
    let score;
    if (playerChoice == computerChoice) {
        score = 0
    } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
        score = 1
    } else if (playerChoice == 'Paper' && computerChoice == 'Scissors') {
        score = 1
    } else if (playerChoice == 'Scissors' && computerChoice == 'Scissors') {
        score = 1
    } else {
        score = -1
    }
    return score
}

function onClickRPS(playerChoice) {
    console.log(playerChoice)
}

function playGame() {
    const rpsButtons = document.querySelectorAll('.rpsButton')
    rpsButtons[0].onclick = () => console.log(rpsButtons[0].value)

    rpsButtons.forEach(rpsButtons => {
        rpsButtons.onclick = () => onClickRPS(rpsButton.value)
    })
}