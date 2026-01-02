// For / While

// Print numbers from 1 to 100


// for (let i = 1; i < 101; i++) {
//     console.log(i);
// }

// Print even numbers between 1 and 50
// let num = 50;

// for (let i = 1; i < num; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// Find the 
// sum of first 10 numbers
// let sum = 0;

// for (let i = 11; i < 21; i++) {
//     sum = sum + i;
//     console.log(i);

// }
// console.log(sum);


// Reverse a number using loop

// let num = 12345;
// // console.log(num.reverse());

// let Reverse = 0;

// while (num > 0) {
//     let digit = num % 10;
//     Reverse = Reverse * 10 + digit;
//     num = Math.floor(num / 10);
// }
// console.log(Reverse);

// // Print multiplication table of a given number


// let TableNumber = 3;

// let multiplicationNumber = 55;

// for (let i = 1; i <= multiplicationNumber; i++) {
//     console.log(`${i} X ${TableNumber} = ${i * TableNumber} `);

// }



// Nested Loops

// Print pattern:
// Square Pattern

// let str = "*";

// for (let i = 0; i < 4; i++) {
//     let row = "";
//     for (let j = 0; j < 4; j++) {
//         row += str;
//     }
//     console.log(row);
// }



// *
// **
// ***
// ****


// Right Triangle

// let str = "*";
// let count = "";

// for (let i = 0; i < 5; i++) {
//     count += str;
//     console.log(count);
// }

// Number Triangle

for (let i = 1; i < 6; i++) {
    let row = '';
    for (let n = 1; n <= i; n++) {
        row += n;
    }
    console.log(row);

}

// 1
// 12
// 123
// 1234

