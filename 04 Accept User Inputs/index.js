// let username;
// username = window.prompt("What is your username?");

// console.log(username);

let userName;
document.getElementById("mySubmit").onclick = function(){
    userName = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Welcome ${userName}`;
}