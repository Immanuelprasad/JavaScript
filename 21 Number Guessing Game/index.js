const minimumNumber = 1;
const maximumNumber = 100;
const answer = Math.floor(Math.random() * (maximumNumber - minimumNumber + 1)) + minimumNumber;

let attempts;
let guess;
let running = true;

while(running)
{
    guess = window.prompt(`Guess a numberr between ${minimumNumber} and ${maximumNumber}`);
    guess = Number(guess);

    if(isNaN(guess))
    {
        window.alert("Please enter a valid number");
    }
    else if(guess < minimumNumber || guess > maximumNumber)
    {
        window.alert("Please enter between 1 to 100");
    }
    else
    {
        attempts++;
        if(guess < answer)
        {
            window.alert("Too Low Try again");
        }
        else if(guess > answer)
        {
            window.alert("Too High Try again");
        }
        else
        {
            window.alert(`Correct! The answer is ${answer}. It took you ${attempts} attempts`);
            running = false;
        }
    }
}