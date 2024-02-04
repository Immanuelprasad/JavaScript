// Random number between 1 to 100
// let randomNumber1 = Math.floor(Math.random() * 100) + 1;
// console.log(randomNumber1);

// Random number between 50 to 100
// const min = 50;
// const max = 100;
// let randomNumber2 = Math.floor(Math.random() * (max - min)) + min;
// console.log(randomNumber2);

const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const min1 = 1;
const max1 = 6;
let randomNumber3;

myButton.onclick = function(){
    randomNumber3 = Math.floor(Math.random() * max1) + min1;
    myLabel.textContent = randomNumber3;
}