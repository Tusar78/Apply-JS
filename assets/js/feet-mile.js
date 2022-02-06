// Feet to miles converter
const footToMiles = number => {
    const mile = number / 5280;
    return mile;
}
const getMiles = footToMiles(2000);
console.log(getMiles);