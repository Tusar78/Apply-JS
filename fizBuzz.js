// Create a fizbuzz Program

const fizBuzz = number => {
    let contain = [];
    for (let i = 1; i <= number; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            contain.push(`${i} = fizzBuzz`)
        } else if (i % 3 === 0) {
            contain.push(`${i} = fiz`)
        } else if (i % 5 === 0) {
            contain.push(`${i} = buzz`)
        } else {
            contain.push(`${i}`)
        }
    }
    return contain;
}

const userInput = +prompt('Enter you favorite number', '');
const getFizBuzz = fizBuzz(userInput);
console.log(getFizBuzz);