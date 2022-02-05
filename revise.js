// তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে?

// let i = 7;
// while (i <= 15) {
//     if (i % 2 != 0) {
//         console.log(i)
//     }
//     i++;
// }

// const marks = [77, 58, 64, 85, 97, 98, 79, 80, 87];
// const grater80 = [];
// for (const mark of marks) {
//     if (mark >= 80) {
//         grater80.push(mark)
//     }
// }
// console.log(grater80);

// const paperRequirements = (firstBookQuantity, secondBookQuantity, thirdBookQuantity) => {
//     const needPagesFirstBook = 100 * firstBookQuantity
//         , needPagesSecondBook = 200 * secondBookQuantity
//         , needPagesThirdBook = 300 * thirdBookQuantity;

//     const totalPages = needPagesFirstBook + needPagesSecondBook + needPagesThirdBook;
//     return totalPages
// }
// const papersNeed = paperRequirements(2, 1, 3);
// console.log(papersNeed);


// Big name in an array
const friends = ['Rakibul Islam', 'Shariful Islam', 'Shuvo', 'Rochita Rubi', 'Sarmin Sultana', 'Selim Reza'];

// const bestFriends = friends => {
//     let name = '';
//     for (const friend of friends) {
//         if (friend.length > name.length) {
//             name = friend;
//         }
//     }
//     return name;
// }
// const getBigName = bestFriends(friends);
// console.log(getBigName);

// Small name in an array
// const bestFriends = friends => {
//     let name = friends[0]
//       , length = friends.length;
//     for (let i = 0; i < length; i++) {
//         const friend = friends[i];
//         if (friend.length < name.length) {
//             name = friend;
//         }        
//     }
//     return name;
// }

// const getSmallName = bestFriends(friends);
// console.log(getSmallName);

// Random array
const numbers = [5, 4, 75, 84, -5, -45, -55, 47, 11, -74];
let absNumber = [];
for (const number of numbers) {
    if (number >= 0) {
        absNumber.push(number)
    } else {
        break;
    }
}
console.log(absNumber);