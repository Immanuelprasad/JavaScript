let buttons = document.querySelectorAll(".myButtons");
console.log(buttons);

// buttons.forEach((button) => {
//     button.style.backgroundColor = "green";
// })

// const newButton = document.createElement("button");
// newButton.textContent = "Button 5";
// newButton.classList = "myButtons";
// document.body.appendChild(newButton);

// buttons = document.querySelectorAll(".myButtons");
// console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    })
})