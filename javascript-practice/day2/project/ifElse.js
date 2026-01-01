// Check if a number is positive, negative, or zero

let num = "123";

let nowNumber = Number(num);

if (num === 0) {
    console.log(`you number is ${num} it is Zero`);

} else if (num > 0) {
    console.log(`you number is ${num} it is positive`);

} else if (num < 0) {
    console.log(`you number is ${num} it is negitive`);

} else {
    console.log(`please enter valid number`);

}

// Check if a person is eligible to vote

let age = "";

let nowAge = Number(age);

if (nowAge > 18 || nowAge <= 0) {
    console.log(`you age is ${nowAge} you are eligible for the vote`);

} else {
    console.log(`you age is ${nowAge} you are not eligible for the vote`);

}

// Find the largest of 3 numbers
let one = 100
let two = 50
let three = 860


if (one > two && one > three) {
    console.log(one);

} else if (two > three && two > three) {
    console.log(two);

} else {
    console.log(three);

}




// Check if a year is a leap year
// A year is a leap year if:
// Divisible by 400, OR
// Divisible by 4 but not divisible by 100

let year = 2025;


if (year % 400 === 0) {
    console.log(`your year is ${year} is leap year`);
} else if (year % 4 === 0 && year !== 0) {
    console.log(`your year is ${year} is leap year`);

} else {
    console.log(`your year is ${year} is not leap year`);

}
