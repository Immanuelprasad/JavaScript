const myHeading = document.getElementById("myHeading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

const fruits = document.getElementsByClassName("fruits");
for(let fruit1 of fruits)
{
    fruit1.style.backgroundColor = "orange";
}
Array.from(fruits).forEach(fruit2 => {
    fruit2.style.color = "white";
});

const h4Elements = document.getElementsByTagName("h4");
h4Elements[0].style.backgroundColor = "lightblue";

const element = document.querySelector("li");
element.style.backgroundColor = "red";

const allElement = document.querySelectorAll(".vegetables");
allElement.style.backgroundColor = "purple";