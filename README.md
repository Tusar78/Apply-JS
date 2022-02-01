## Inch to Foot Converter - Summery.

- divide the length value by 12
- 1 foot is equal 12 inches.

  > Solution

```
let inches = prompt('Inches', '0');
const inchToFoot = (num) => {
    let foot = num / 12;
    return `${num} inches = ${foot} foot.`;
}
let getFoot = inchToFoot(inches);
alert(getFoot);
```

## Foot to Inch Converter - Summery

- Multiply the length value by 12
- 1 foot is equal 12 inches.

> Solution

```
let foots = prompt('Foots', '0');
const footToInches = (num) => {
    let inches = num * 12;
    return `${num} Foots = ${inches} Inches.`;
}
let getInches = footToInches(foots);
alert(getInches);
```

## Mile To Kilometer - Summery

- For an approximate result, multiply the length value by 1.609
- 1 mile is equal to 1.609

> Solution

```
const mile = prompt('How many miles?', '');
const mileToKilo = (num) => {
    let kilo = (num * 1.609).toFixed(2);
    return `${num} Mile = ${kilo} Kilometer`;
}
let getKilo = mileToKilo(mile);
alert(getKilo)
```

## Kilometer to Mile - Summery

- For and approximate result, devide the length value by 1.609
- 1 mile is equal to 1.609

> Solution

```
const kilo = prompt('How many kilo', '');
const kiloToMile = (num) => {
    let mile = (num / 1.609).toFixed(2);
    return `${num} Kilo = ${mile} Mile`;
}
let getMile = kiloToMile(kilo);
alert(getMile);
```
