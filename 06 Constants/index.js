const PI = 3.125;
let radius;
let circumference;

// radius = window.prompt("Enter the radius");
// radius = Number(radius);

// circumference = 2 * pi * radius;

// window.alert(circumference);

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("radius").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("circumference").textContent = `Cirumference of the circle of radius ${radius} is ${circumference} cm`
}