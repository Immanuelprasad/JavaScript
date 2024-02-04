// While Loop
let loggedIn1 = false;
let userName1;
let password1;

while(!loggedIn1)
{
    userName1 = window.prompt("Enter the UserName: ");
    password1 = window.prompt("Enter the Password: ");
    if(userName1 === "immanuel" && password1 === "prasad")
    {
        loggedIn1 = true;
        console.log("Logged IN");
    }
    else
    {
        console.log("Invalid credentiials");
    }
}

// Do-While Loop
let loggedIn2 = false;
let userName2;
let password2;
do
{
    userName2 = window.prompt("Enter the UserName: ");
    password2 = window.prompt("Enter the Password: ");
    if(userName2 === "immanuel" && password2 === "prasad")
    {
        loggedIn2 = true;
        console.log("Logged IN");
    }
    else
    {
        console.log("Invalid credentiials");
    }
}while(!loggedIn2)