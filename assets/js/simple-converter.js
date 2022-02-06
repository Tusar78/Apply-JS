// Any text to be converted lower case
const textToLowerCase = text => {
    const lower = text.toLowerCase();
    return lower;
}
const beLowerCase = textToLowerCase('tusar');
console.log(beLowerCase);

// First and second name concatenation 
const fullName = (firstName, lastName) => {
    const fullName = `${firstName} ${lastName}`;
    return fullName;
}
const fullNamePrint = fullName('Rakibul', 'Islam');
console.log(fullNamePrint);

// Any name convert to squire
const convertSquire = number => {
    let squire = number * number;
    return squire;
}
const beSquireNumber = convertSquire(5);
console.log(beSquireNumber); 