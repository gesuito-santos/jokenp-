const result = document.querySelector('.result')
const humanScore = document.querySelector('.user-score')
const machineScore = document.querySelector('.machine-score')
const resetar = document.querySelector('.resetar')

let humanScoreNumber = 0;
let machineScoreNumber = 0;



const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())

}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const random = Math.floor(Math.random() * 3)

    return choices[random]
}

const playTheGame = (human, machine) => {

    console.log('Humano: ' + human + 'Máquina: ' + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate!"
    } else if (
        human === 'paper' && machine === 'rock' ||
        human === 'rock' && machine === 'scissors' ||
        human === 'scissors' && machine === 'paper') {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou!"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu para a Alexa!"
    }

  
    function reset() {
        humanScoreNumber = 0;
        machineScoreNumber = 0;
        humanScore.innerHTML = 0;
        machineScore.innerHTML = 0;
        result.innerHTML = "Faça sua escolha."

    }

    resetar.addEventListener("click", reset);
 
 

}




/* 

papel -> pedra -> tesoura

*/