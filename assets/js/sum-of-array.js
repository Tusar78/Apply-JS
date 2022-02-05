// Summation of all numbers in an array.

// Necessary variable declare with initialization
let name = 'Tusar'
  , marks = [78, 85, 87, 94, 99, 65, 77];
    
const sumOfArray = (name, numbers) => {
    let length = numbers.length
      , sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];    
    };
    return `Student name: ${name}. Total marks: ${sum}`;
}

let summation = sumOfArray(name, marks);
console.log(summation);
