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
## Foot to Inch Converted - Summery
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