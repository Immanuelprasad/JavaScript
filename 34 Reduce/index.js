// const prices = [5, 30, 10, 25, 15, 20];

// function sum(accumulator, element)
// {
//     return accumulator + element;
// }

// const total = prices.reduce(sum);
// console.log(`${total}`);

const grades = [75, 50, 90, 80, 65, 95];

function getMaximumNumber(accumulator, element)
{
    return Math.max(accumulator, element);
}
function getMinimumNumber(accumulator, element)
{
    return Math.min(accumulator, element);
}

const maxNum = grades.reduce(getMaximumNumber);
console.log(maxNum);
console.log("-------------------------------------------");
const minNum = grades.reduce(getMinimumNumber);
console.log(minNum);