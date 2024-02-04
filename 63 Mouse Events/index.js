// Syntax
// myBox.addEventListener(event, callback);

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

// Type 1
// function changeColour(event)
// {
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "You touched me";
// }
// myBox.addEventListener("click", changeColour);

// Type 2
// myBox.addEventListener("click", function(event){
//     event.target.textContent = "You touched me";
//     event.target.style.backgroundColor = "tomato";
// });

// Type 3
myBox.addEventListener("click", (event) => {
    event.target.textContent = "You touched me";
    event.target.style.backgroundColor = "tomato";
});

myBox.addEventListener("mouseover", (event) =>{
    event.target.style.backgroundColor = "purple";
    event.target.textContent = "You Hovered on me";
})

myBox.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Mouse-out on action";
})

// We can assign to other tags to impact other tags
myButton.addEventListener("click", (event) => {
    myBox.textContent = "You touched me";
    myBox.style.backgroundColor = "tomato";
});

myButton.addEventListener("mouseover", (event) =>{
    myBox.style.backgroundColor = "purple";
    myBox.textContent = "You Hovered on me";
})

myButton.addEventListener("mouseout", (event) => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Mouse-out on action";
})