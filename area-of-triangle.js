// Calculate area of triangle used by heron's formula.

const areaOfTriangle = (a, b, c) => {
  // Calculate Semi-perimeter
  let s = (a + b + c) / 2;
  let calculateArea = s * (s - a) * (s - b) * (s - c);
  console.log(calculateArea);
  let area = Math.sqrt(calculateArea).toFixed(2);
  return +area;
};

let sideA = +prompt("Enter the value of : Side A"),
  sideB = +prompt("Enter the value of : Side B"),
  sideC = +prompt("Enter the value of : Side C");

const area = areaOfTriangle(sideA, sideB, sideC);
alert(area);
