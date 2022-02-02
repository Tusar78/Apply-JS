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

## A program to find the smallest number and the largest number in three numbers

> Approach number one.

```
const minMax = (num1, num2, num3, minmax) => {
    if (minmax === 'max') {
        console.log(num1, num2, num3);
        if (num1 > num2 && num1 > num3) {
            return `Largest one is : ${num1}`;
        } else if (num2 > num1 && num2 > num3) {
            return `Largest one is : ${num2}`;
        } else {
            return `Largest one is : ${num3}`;
        }
    } else if (minmax === 'min') {
        console.log(num1, num2, num3);
        if (num1 < num2 && num1 < num3) {
            return `Smaller one is : ${num1}`;
        } else if (num2 < num1 && num2 < num3) {
            return `Smaller one is : ${num2}`;
        } else {
            return `Smaller one is : ${num3}`;
        }
    }
}

const smallNumber = minMax(10, 25, 24, 'max');
console.log(smallNumber);
const largestNumber = minMax(25, 30, 24, 'max')
console.log(largestNumber);
```

> Approach number two.

```
const minMax = (num1, num2, num3, minmax) => {
    if (minmax === 'max') {
        console.log(num1, num2, num3);
        return `Largest one is: ${Math.max(num1, num2, num3)}`;
    } else if (minmax === 'min') {
        console.log(num1, num2, num3);
        return `Smaller one is: ${Math.min(num1, num2, num3)}`;
    }
}

const smallNumber = minMax(10, 25, 24, 'max');
console.log(smallNumber);
const largestNumber = minMax(25, 30, 24, 'max')
console.log(largestNumber);
```
