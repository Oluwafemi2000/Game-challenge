let playGame = confirm("Shall we play rock, paper, or scissors");
if (playGame){
    // Play
    let playerChoice = prompt("Please enter rock, paper, or scissors.");
    if (playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissor"){

            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? "rock"
            : computerChoice === 2 ? "paper"
            : ":scissors";

            let result = playerOne === computer
            ? "Tie Game!"
            : playerOne === "rock" && computer === "paper"
            ? `playerOne: ${playerOne}\ncomputer: ${computer}
            \ncomputer Wins!`
            : playerOne === "paper" && computer === "scissors"
            ? `playerOne: ${playerOne}\ncomputer: ${computer}
            \ncomputer Wins!`
            : playerOne === "scissors" && computer === "rock"
            ? `playerOne: ${playerOne}\ncomputer: ${computer}
            \ncomputer Wins!`
            :`playerOne: ${playerOne}\ncomputer: ${computer}
            \nplayerOne Wins!`;
            alert(result);

            let playAgain = confirm("Play again?");
            playAgain ? location.reload() : alert("Thanks for playing");
        }else{
            alert("You didn't enter rock, paper, or scissors"); 
        }
    }else{
        alert("I guess you changed your mind, Maybe next time");
    }
}else{
    alert("Ok, maybe next time");
}