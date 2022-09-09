function getComputerChoice(){
    const choice = ["rock", "paper", "scissors"];
    let computerChoice =  choice[Math.floor(Math.random()* 3)];
    return computerChoice;
}

function playRound(computerSelection, playerSelection){
    if (computerSelection ==="rock" && playerSelection ==="paper"  || computerSelection ==="scissors" && playerSelection ==="rock" || computerSelection ==="paper" && playerSelection ==="scissors")
    {
        return "You Win!";
    } else if (computerSelection ==="scissors" && playerSelection ==="paper" || computerSelection ==="rock" && playerSelection ==="scissors" || computerSelection ==="paper" && playerSelection === "rock")//
    {
        return "You Lose!";    
    } else {
        return "Tie";
    
    }
}

let playerSelection = prompt("Rock, Paper, or Scissors");
let computerSelection= getComputerChoice();
playerSelection = playerSelection.toLowerCase();
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

