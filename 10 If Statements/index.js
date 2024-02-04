const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");
let age;
let resultAns;
mySubmit.onclick = function()
{
    age = myText.value;
    age = Number(age);
    if(age >= 100)
    {
        resultAns = "You are too old";
    }
    else if(age == 0)
    {
        resultAns = "You are a born baby so cancelled";
    }
    else if(age >= 18)
    {
        resultAns = "You are old enough to enter";
    }
    else if(age < 0)
    {
        resultAns = "Your age cannot be below 0";
    }
    else
    {
        resultAns = "Your age must be 18+";
    }
    result.textContent = `Your age is ${age} and ${resultAns}`;
}