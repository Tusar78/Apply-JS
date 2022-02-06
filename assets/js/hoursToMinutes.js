// Convert Hours 
const hoursToMinutes = number => {
    const minutes = number * 60;
    return minutes;
}
const getMinutes = hoursToMinutes(12);
console.log(getMinutes);