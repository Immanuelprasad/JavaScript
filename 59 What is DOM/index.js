const userName = "Immanuel Prasad";
const welcomeMessage = document.getElementById("welcome-msg");
welcomeMessage.textContent += userName === "" ? `Guest` : userName;

console.dir(document);