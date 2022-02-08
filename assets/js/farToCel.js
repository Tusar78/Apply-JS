// Fahrenheit to celsius 
const farToCel = far => {
    let cel = (far - 32.0) * 5.0 / 9.0;
    return Math.trunc(Math.round(cel));
}
const getCelsius = farToCel(63);
console.log(getCelsius);

// Celsius to fahrenheit
const celToFar = cel => {
    let far = (cel * 9.0 / 5.0) + 32.0;
    return Math.trunc(Math.round(far));
}
const getFahrenheit = celToFar(17);
console.log(getFahrenheit);