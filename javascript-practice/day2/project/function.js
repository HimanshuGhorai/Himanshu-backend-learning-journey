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

const max = (a, b) => a > b ? a : b;

// console.log(max(4, 99));
// console.log(max(444, 99));
// console.log(max(NaN, 99));


let new_2 = Number(NaN);
// console.log(max(new_2, 99));



// Function Logic
// Function to check palindrome

const palindrome = "mom";

const ifPalidrome = (str) => {

    const newstr = str.split("").reverse().join("");

    if (newstr === str) {
        return "this is a palindrome";
    } else {
        return "this is a not palindrome";
    }
}

console.log(ifPalidrome(palindrome));


// Function to count vowels in a string

let newnam = "e";

const countvowels = (str) => {

    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;

    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;

        } // .includes it use like if this element is there or not ;

    }
    return count;
}
// console.log("Number of vowels:", countvowels(newnam));
// console.log(countvowels("e"));           // 1
// console.log(countvowels("Hello"));       // 2
// console.log(countvowels("JavaScript"));  // 3
// console.log(countvowels("Education"));   // 5



// Function to find largest number in array

// const bignum = [22, 44, 66, 23, 12, 66, 765];


const retbignum = (num) => {

    let max = num[0];

    for (let i = 0; i < num.length; i++) {

        if (num[i] > max) {
            max = num[i];
        }

    }



    return max;

}

console.log(retbignum([3, 7, 2, 9, 5])); // 9
console.log(retbignum([10, 10, 5, 2]));  // 10
console.log(retbignum([-3, -7, -1]));    // -1
