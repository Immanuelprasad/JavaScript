const choices = ["rock", "paper", "scissor"];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice)
{
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    if(playerChoice === computerChoice)
    {
        result = "Its a tie";
    }
    else
    {
        switch(playerChoice)
        {
            case "rock":
                result = (computerChoice === "scissor") ? "You Win" : "You Lose";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You Win" : "You Lose";
                break;
            case "scissor":
                result = (computerChoice === "paper") ? "You Win" : "You Lose";
                break;
        }
    }
    playerDisplay.textContent = `Player : ${playerChoice}`;
    computerDisplay.textContent = `Computer : ${computerChoice}`;
    resultDisplay.textContent = result;
}