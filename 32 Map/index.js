// const numbers = [1, 2, 3, 4, 5];

// function square(element)
// {
//     return Math.pow(element, 2);
// }
// function cube(element)
// {
//     return Math.pow(element, 3);
// }

// const squares = numbers.map(square);
// console.log(squares);
// console.log("---------------------------------------------------");
// const cubes = numbers.map(cube);
// console.log(cubes);

// const students = ["Spongebob", "Patrick", "Squidward"];

// function upperCase(element)
// {
//     return element.toUpperCase();
// }

// const upperStudents = students.map(upperCase);
// console.log(upperStudents);

const koreanDatesFormat = ["1997-02-11", "1997-08-26"];

function toIndianDatesFormat(element)
{
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`
}
const indianDatesFormat = koreanDatesFormat.map(toIndianDatesFormat);
console.log(koreanDatesFormat);
console.log(indianDatesFormat);