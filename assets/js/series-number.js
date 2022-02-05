// Print series number

// Series 01 : 2 4 6 8 10 12 14;
// let series = ''
//   , num;
// for (let i = 0; i < 10; i++) {
//     num = i * 2;
//     series += num + ' ';
// }
// console.log(series);

// Series 02 : 1 4 7 10 13 16 ...
// let series = '1 '
//   , num = 1;

// for (let i = 1; i < 10; i++) {
//     num += 3;
//     series += num + ' ';
// }

// console.log(series);

// Series 03 : 0 3 8 15 24 35 48
// let series = ''
//   , num;

// for (let i = 1; i < 10; i++) {
//     num = (i * i) - 1;
//     series += num + ' ';
// }
// console.log(series);

// Series 04: 1 4 3 8 5 12 7 16 9 20
// let series = ''
//   , num;

// for (let i = 1; i < 10; i++) {
//   (i % 2 == 0) ? num = i * 2 : num = i;
//   series += num + ' ';
// }
// console.log(series);

// Series 05: 0 1 1 2 3 5 8 13 21 - Fibonacci

// Approach one
// let series = '0 1 '
//   , num = 0
//   , x = 0
//   , y = 1;

// for (let i = 0; i < 10; i++) {
//   num = x + y;
//   x = y;
//   y = num;
//   series += num + ' ';
// }

// console.log(series);

// Approach two
// 10nth = 9th + 8th
// 15th = 14th + 13th

// const fibo = [0, 1];
// for (let i = 2; i < 10; i++) {
//   fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);

// Approach three"
// const fiboSeries = (num) => {
//   if (typeof num === 'number') {
//     const fibo = [0, 1];
//     for (let i = 2; i < num; i++) {
//       fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }
//     return fibo;
//   }
// };

// const fifteenFibo = fiboSeries(15);
// console.log(fifteenFibo);


var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for(var i = 0; i < sentence.length; i++){
  var letter = sentence[i];
  if(letter == 'a'){
    count++;
  }
}
console.log(count)
