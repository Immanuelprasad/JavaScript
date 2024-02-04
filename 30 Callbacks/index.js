// function hello(cal)
// {
//     setTimeout(function()
//     {
//         console.log("hello");
//         cal();
//     }, 3000);
// }
// function goodBye()
// {
//     console.log("Good Bye");
// }

// hello(goodBye);

function sum(callback, x, y)
{
    let result = x + y;
    callback(result);
}
function displayConsole(result)
{
    console.log(result);
}

sum(displayConsole, 5, 6);