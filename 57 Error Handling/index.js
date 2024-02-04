// try
// {
//     console.log("Hello");
//     console.log(x);
// }
// catch(error)
// {
//     console.error(error);
// }
// finally
// {
//     console.log("This always executes");
// }

try
{
    const dividend = window.prompt("Enter a dividend: ");
    const divisor = window.prompt("Enter a divisor: ");

    if(divisor == 0)
    {
        throw new Error("You can't divide by 0");
    }
    if(isNaN(dividend) || isNaN(divisor))
    {
        throw new Error("Values must be number");
    }

    const result = dividend / divisor;
    console.log(result);
}
catch(error)
{
    console.log(error);
}