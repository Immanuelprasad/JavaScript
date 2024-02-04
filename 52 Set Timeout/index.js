function sayHello()
{
    console.log("Hello")
}

setTimeout(sayHello, 3000);

setTimeout(function(){console.log("Good Morning")}, 3000);

setTimeout(() => console.log("Good Night"), 3000);