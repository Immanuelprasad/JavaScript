const myCheckBox = document.getElementById("myCheckBox");
const visaButton = document.getElementById("visaButton");
const masterCardButton = document.getElementById("masterCardButton");
const paypalButton = document.getElementById("paypalButton");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function()
{
    if(myCheckBox.checked)
    {
        subResult.textContent = `You are subscribed`;
    }
    else
    {
        subResult.textContent = `You are not subscribed`;
    }
    if(visaButton.checked)
    {
        paymentResult.textContent = `You are paying with visa`;
    }
    else if(masterCardButton.checked)
    {
        paymentResult.textContent = `You are paying with mastercard`;
    }
    else if(paypalButton.checked)
    {
        paymentResult.textContent = `You are paying with paypal`;
    }
    else
    {
        paymentResult.textContent = `You must select a payment type`;
    }
}