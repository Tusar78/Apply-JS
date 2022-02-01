// Miles to kilometer converted.
const mile = prompt('How many miles?', '');
const mileToKilo = (num) => {
    let kilo = (num * 1.609).toFixed(2);
    return `${num} Mile = ${kilo} Kilometer`;
}
let getKilo = mileToKilo(mile);
alert(getKilo)


// Kilometer to miles converter
const kilo = prompt('How many kilo', '');
const kiloToMile = (num) => {
    let mile = (num / 1.609).toFixed(2);
    return `${num} Kilo = ${mile} Mile`;
}
let getMile = kiloToMile(kilo);
alert(getMile);