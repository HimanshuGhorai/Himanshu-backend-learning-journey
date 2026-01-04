// 10️⃣ Function Basics

// Function to add two numbers


function add(a, b) {
    return a + b
}
// console.log(add(5, 6));




// Function to find square of a number

function square(n) {
    return n * n;
}
console.log(square(5));


// Function to check even or odd

function oddOrEven(n) {

    return n % 2 === 0 ? "even" : "odd";
}

// console.log(oddOrEven(6));


// Function to return factorial of a number

let val = 5;

function factorial(val) {
    let result = 1;
    for (let i = 1; i <= val; i++) {
        result *= i;
    }
    return result
}

console.log(factorial(val));


// 11️⃣ Arrow Functions

// Convert normal function to arrow function

// function newfun(a,b){

// }

const adding = (b) => {
    console.log(b + " this is a num");

}
adding(5)
// console.log(adding);


// Arrow function to reverse a string
const reverse = (str) => str.split("").reverse().join("");
console.log(reverse("himanshu"));





// Arrow function to find max of two numbers