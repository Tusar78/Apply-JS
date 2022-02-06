// Simple even odd program
const evenOdd = (number) => {
    let getEvenOdd;   
    number % 2 !=0 ? getEvenOdd = 'Odd' : getEvenOdd = 'Even';
    return getEvenOdd;
}
const beEvenOdd = evenOdd(56);
console.log(beEvenOdd);

// My age even or odd
const ageEvenOdd = number => {
    let getAgeEvenOdd;
    number % 2 != 0 ? getAgeEvenOdd = 'Your age is Odd' : getAgeEvenOdd = 'Your age is Even';
    return getAgeEvenOdd;
}
const beAgeEvenOdd = ageEvenOdd('23');
console.log(beAgeEvenOdd);