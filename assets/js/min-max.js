// Get max number in 3 numbers

// Beginner approach
// const minMax = (num1, num2, num3, minmax) => {
//     if (minmax === 'max') {
//         console.log(num1, num2, num3);
//         if (num1 > num2 && num1 > num3) {
//             return `Largest one is : ${num1}`;
//         } else if (num2 > num1 && num2 > num3) {
//             return `Largest one is : ${num2}`;
//         } else {
//             return `Largest one is : ${num3}`;
//         }
//     } else if (minmax === 'min') {
//         console.log(num1, num2, num3);
//         if (num1 < num2 && num1 < num3) {
//             return `Smaller one is : ${num1}`;
//         } else if (num2 < num1 && num2 < num3) {
//             return `Smaller one is : ${num2}`;
//         } else {
//             return `Smaller one is : ${num3}`;
//         }
//     }
// }

// const smallNumber = minMax(10, 25, 24, 'max');
// console.log(smallNumber);
// const largestNumber = minMax(25, 30, 24, 'max')
// console.log(largestNumber);


// Professional approach
const minMax = (num1, num2, num3, minmax) => {
    if (minmax === 'max') {
        console.log(num1, num2, num3);
        return `Largest one is: ${Math.max(num1, num2, num3)}`;
    } else if (minmax === 'min') {
        console.log(num1, num2, num3);
        return `Smaller one is: ${Math.min(num1, num2, num3)}`;
    }
}

const smallNumber = minMax(10, 25, 24, 'max');
console.log(smallNumber);
const largestNumber = minMax(25, 30, 24, 'max')
console.log(largestNumber);