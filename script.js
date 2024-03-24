let playerCounter = 0;
let computerCounter = 0;
let gameCounter = 0;

function getComputerChoice() {
    let ComputerChoice = Math.floor(Math.random() * 3) + 1;
    if (ComputerChoice === 1) {
        return "Rock"
    }
    if (ComputerChoice === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    let upperLetter = playerSelection.charAt(0).toUpperCase();
    playerSelection = upperLetter + playerSelection.toLowerCase().substring(1);


    if( !playerSelection.includes("Rock") && !playerSelection.includes("Paper") && !playerSelection.includes("Scissors")){
        return "Please write a valid option"
    }
    
    if (playerSelection === computerSelection){
        return `It's a Tie! ${playerSelection} doesn't beat ${computerSelection}`
    } else {
        if(playerSelection === "Rock"){
            if(computerSelection === "Paper"){
                return `You Lose! ${computerSelection} beats ${playerSelection}`
            } else {
                return `You Won! ${playerSelection} beats ${computerSelection}`
            }
        } else if(playerSelection === "Paper"){
            if(computerSelection === "Scissors"){
                return `You Lose! ${computerSelection} beats ${playerSelection}`
            } else {
                return `You Won! ${playerSelection} beats ${computerSelection}`
            }
        } else if(playerSelection === "Scissors"){
            if(computerSelection === "Rock"){
                return `You Lose! ${computerSelection} beats ${playerSelection}`
            } else {
                return `You Won! ${playerSelection} beats ${computerSelection}`
            }
        }  else {
            return "Please write a valid option"
        }
    }    
}

function playGame(){
    let result;
    do {
        let playerChoice 

        playerChoice = prompt("Please select one of the three options: Rock, Paper or Scissors");

        let computerSelection = getComputerChoice();
    
        result = playRound(playerChoice, computerSelection)
        
        if(result.includes('Won')){
            playerCounter++
        } else if(result.includes('Lose')){
            computerCounter++
        } else if(result.includes('Tie')){
            
        } else{
            alert(result);
        }
    } while(result.includes('Please write a valid option'))

    gameCounter++

    console.log(gameCounter + ': ' + result)
    
    if(gameCounter === 5){
        console.log(`player : ${playerCounter}, computer: ${computerCounter}`)
        if(playerCounter === computerCounter){
            console.log('Tie in the match!!!')
        }
        if(playerCounter > computerCounter){
            console.log('You won the Match!!!')
        }
        if(playerCounter < computerCounter){
            console.log('You lose the Match :C')
        }
    }
}

playGame()
playGame()
playGame()
playGame()
playGame()