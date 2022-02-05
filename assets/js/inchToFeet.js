// Inch to feet converter
let inches = prompt('Inches', '0');
const inchToFoot = (num) => {
    let foot = num / 12;
    return `${num} inches = ${foot} foot.`;
}
let getFoot = inchToFoot(inches);
alert(getFoot);


// Foots to inches converter
let foots = prompt('Foots', '0');
const footToInches = (num) => {
    let inches = num * 12;
    return `${num} Foots = ${inches} Inches.`;
}
let getInches = footToInches(foots);
alert(getInches);