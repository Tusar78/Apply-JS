// Leap Year function
const leapYear = (year) => {
    let leap;
    // (year % 100 == 0) ? leap = year % 400 == 0 : leap = year % 4 == 0;
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            leap = `${year} is leap year.`
        } else {
            leap = `${year} is not leap year.`
        }
    } else {
        if (year % 4 == 0) {
            leap = `${year} is leap year.`
        } else {
            leap = `${year} is not leap year.`
        }
    }
    return `${leap}`
}

console.log(leapYear(1900));