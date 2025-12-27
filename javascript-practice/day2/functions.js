// function declaration 

// function greet(name){
//     return `Hello ${ name}`
// }
// console.log(greet("Himanshu"));

// function expraction

// const add = function (a, b) {
//     return a + b;
// }
// console.log(add(4, 4));


// Arrow function
// const multiply = (a, b) => {
//     return a * b;
// }

// console.log(multiply(2, 2));




// Create these functions:
// 1. Function that checks if number is even
function isEven(num) {
    // Your code here

    return num % 2 == 0 ? "even" : "odd";
}
console.log(isEven(44));


// 2. Function that returns max of two numbers
function maxOfTwo(a, b) {
    return a > b ? `this is bignumber ${a} ` : `this is bignumber ${b}`
}

console.log(maxOfTwo(6, 15));

// 3. Arrow function to reverse a string
const reverseString = (str) => {
    // Your code here
    return str.split("").reverse().join("");

}
console.log(reverseString('hello'));

