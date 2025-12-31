// // for loop ex
// // Print numbers 1 to 10
// for (let i = 1; i < 11; i++) {
//     console.log(i);
// }

// // Print multiplication table of 5

// console.log("\n multiplication table of 5 ");

// for (let i = 0; i < 11; i++) {

//     console.log(`5 * ${i} = ${5 * i}`);

// }




// // while loop 

// // Countdown from 10 to 1

// let num = 10;

// while (num > 0) {
//     console.log(num);
//     num--;
// }


const num = [12, 23, 44, 55, 45, 90];

// for loop
// for (let i = 0; i < num.length; i++) {
//     console.log(`index  ${i} => numbers ${num[i]} `);

// }

// while loop

let i = 0;
while (i < num.length) {
    console.log(`Count ${i}: numbers ${num[i]}`);
    i++;
}
