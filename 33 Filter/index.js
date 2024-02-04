// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function isEven(element)
// {
//     return element % 2 === 0;
// }
// function isOdd(element)
// {
//     return element % 2 !== 0;
// }

// let evenNumber = numbers.filter(isEven);
// console.log(evenNumber);
// console.log("-------------------------------------");
// let oddNumber = numbers.filter(isOdd);
// console.log(oddNumber);

// const ages = [16, 17, 18, 18, 19, 20, 60];

// function isAdult(element)
// {
//     return element >= 18;
// }
// function isNotAdult(element)
// {
//     return element < 18;
// }

// const adults = ages.filter(isAdult);
// console.log(adults);
// console.log("-------------------------------------");
// const notAdults = ages.filter(isNotAdult);
// console.log(notAdults);

const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];

function getShortWords(element)
{
    return element.length <= 6;
}
function getLongWords(element)
{
    return element.length > 6;
}

const shortWords = words.filter(getShortWords);
console.log(shortWords);
console.log("-------------------------------------");
const longWords = words.filter(getLongWords);
console.log(longWords);