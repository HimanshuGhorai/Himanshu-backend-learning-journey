// 🟡 LEVEL 3 — ARRAYS (CORE JS)
// 7️⃣ Array Basics


// let arr = [23, 55, 33, 56, 88];

// Find the length of an array
// console.log(arr.length);

// Print all elements using loop
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);

// }
// Find the largest element in array
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log(max);


// Find the sum of array elements
// let arr = [23, 55, 33, 56, 88];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }

// console.log(sum);




// Count how many elements are greater than 50

// let arr = [23, 55, 33, 56, 88];
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 50) {
//         count += 1

//     }
// }
// console.log(count);




// 8️⃣ Array Methods

// Use push, pop, shift, unshift
// push(value) → adds value at the end

// pop() → removes the last element

// unshift(value) → adds value at the start

// shift() → removes the first element
// let arr = [23, 55, 33, 56, 88];

// // arr.push(44, 55, 55, 66, 98);
// // arr.pop();
// // arr.shift()
// arr.unshift(235)
// console.log(arr);



// Reverse an array (without reverse())

// let arr = [23, 55, 33, 56, 88];
// let newarr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//     newarr.push(arr[i]);
// }
// console.log(newarr);


// Check if an element exists in array
// let arr = [23, 55, 33, 56, 88];

// let ele = 33;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === ele) {
//         console.log(arr[i]);
//         break;

//     } else {
//         console.log(`element is not found`);

//     }

// }

// Remove duplicate elements
// let arr = [1, 3, 2, 5, 4, 7, 35, 2, 4, 6, 2];
// let newarr = [];

// for (let i = 0; i < arr.length; i++) {
//     let isDuplicat = false;

//     for (let j = 0; j < newarr.length; j++) {
//         if (arr[i] === newarr[j]) {
//             isDuplicat = true;
//             break;
//         }
//     }

//     if (!isDuplicat) {
//         newarr.push(arr[i]);
//     }
// }

// console.log(newarr);

// 9️⃣ forEach / map / filter

// Print all elements using forEach

// let arr = [23, 55, 33, 56, 88];



// Create a new array with values doubled

let arr = [2, 4, 6, 7, 8, 9, 19];

const douled = (num) => {

    let newarr = [];

    for (let i = 0; i < num.length; i++) {
        newarr.push(num[i] * 2);
    }
    return newarr

}

// console.log(douled(arr));


// Filter even numbers from array

let arr2 = [3, 2, 6, 6, 8, 5, 4];
let evenArr = []

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 === 0) {
        evenArr.push(arr2[i]);
    } else {
        continue;
    }
}
// console.log(evenArr);


// Count odd numbers using forEach

const arr3 = [0, 4, 2, 11, 8, 87, 44, 3, 7];
let odd1 = [];

arr3.forEach(n => {
    if (n % 2 !== 0) {
        odd1.push(n);
    }
})

console.log(odd1);


// 14️⃣ Mixed Logic

// Find missing number in array



// Find second largest number

// Remove falsy values from array

// Flatten a nested array (basic)


