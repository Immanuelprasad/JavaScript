const fruits = document.getElementById("fruits");
const fruitsFirstChild = fruits.firstElementChild;
fruitsFirstChild.style.backgroundColor = "red";

const desserts = document.getElementById("desserts");
const dessertsLastChild = desserts.lastElementChild;
dessertsLastChild.style.backgroundColor = "purple";

const nextSibling = fruits.nextElementSibling;
nextSibling.style.backgroundColor = "green";