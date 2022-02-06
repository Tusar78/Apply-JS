// Multiplication table
const multiplicationTable = number => {
    let mulTable = '';
    for (let i = 1; i <= 10; i++) {
        mulTable += `${number} x ${i} = ${i * number} \n`;
    }
    return mulTable;
}
const userNeed = +prompt('Enter the valid number', '');
const tableOfMultiplication = multiplicationTable(userNeed);
console.log(tableOfMultiplication);