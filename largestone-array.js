// Find the largest number in an array.

const rollNumbers = [77, 10, 3, 9, 12, 45, 56];

const largestInArray = (numbers, largeSmall) => {
    let length = numbers.length
      , lowHigh = numbers[0];

    if (largeSmall === 'large') {
        for (let i = 0; i < length; i++) {
            let elem = numbers[i];
            if (lowHigh < elem) {
                lowHigh = elem;
            }        
        }    
    } else if (largeSmall === 'small') {
        for (let i = 0; i < length; i++) {
            let elem = numbers[i];
            if (lowHigh > elem) {
                lowHigh = elem;
            }        
        }
    }
    return lowHigh;
}

const largeSmallRoll = largestInArray(rollNumbers, 'small');
console.log(largeSmallRoll);


// Declare with initialize variable

// const rollNumbers = [77, 10, 3, 9, 12, 45, 56];

// const largestInArray = (numbers) => {
//     let lowToHigh = numbers.sort((a, b) => {
//         return a - b;
//     });
//     let bigNumber = lowToHigh[lowToHigh.length-1];
//     return bigNumber;
// }

// const badStudent = largestInArray(rollNumbers);
// console.log(badStudent);