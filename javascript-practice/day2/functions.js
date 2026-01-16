// // // function declaration 

// // // function greet(name){
// // //     return `Hello ${ name}`
// // // }
// // // console.log(greet("Himanshu"));

// // // function expraction

// // // const add = function (a, b) {
// // //     return a + b;
// // // }
// // // console.log(add(4, 4));


// // // Arrow function
// // // const multiply = (a, b) => {
// // //     return a * b;
// // // }

// // // console.log(multiply(2, 2));




// // // Create these functions:
// // // 1. Function that checks if number is even
// // function isEven(num) {
// //     // Your code here

// //     return num % 2 == 0 ? "even" : "odd";
// // }
// // console.log(isEven(44));


// // // 2. Function that returns max of two numbers
// // function maxOfTwo(a, b) {
// //     return a > b ? `this is bignumber ${a} ` : `this is bignumber ${b}`
// // }

// // console.log(maxOfTwo(6, 15));

// // // 3. Arrow function to reverse a string
// // const reverseString = (str) => {
// //     // Your code here
// //     return str.split("").reverse().join("");

// // }
// // console.log(reverseString('hello'));



// // function sayHello() {
// //     console.log("Hello JavaScript");
// // }

// // sayHello();


// // function greetUser(name) {
// //     console.log(`Hello ${name}`);
// // }

// // greetUser("Himanshu");


// // function add(a, b) {
// //     return a + b;
// // }

// // let result = add(5, 3);
// // console.log(result);


// // function isEven(num) {
// //     return num % 2 === 0;
// // }

// // console.log(isEven(4));
// // console.log(isEven(7));



// // function culculeteCartPrice(num1) {
// //     return num1;
// // }

// // console.log(culculeteCartPrice(3));


// function culculeteCartPrice(...num1) {
//     return num1;
// }

// console.log(culculeteCartPrice(3, 44, 335, 778));


// const user = {
//     name: "himu",
//     email: "himanshu@gmail.com",
//     price: 999,
// }


// function hendelObjects(anyObj) {
//     console.log(`user name is ${anyObj.name} and his email is ${anyObj.email} price is ${anyObj.price}`);

// }

// hendelObjects(user);

// hendelObjects({
//     name: "ram",
//     email: "ram@gamil.com",
//     price: 9999
// })

// const newvalarr = [23, "hhii", 44.44, true];

// function newarr(newarrval) {

//     return newarrval[2];

// }

// console.log(newarr(newvalarr));


// // arrow function ===============

const user = {
    name: "Himanshu",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.name},welcome to website`);
        console.log(this);

    }
}

// user.welcomeMessage();
// user.name = "ram";
// user.welcomeMessage();

// console.log(this);

// function newfnc() {
//     let username = "himanshu";
//     console.log(this.username);

// }
// newfnc();

// const arrfnc = () => {
//     let username = "himanshu";
//     console.log(this.username);

// }

// arrfnc();


// const addtow = (num1, num2) => {
//     return num1 + num2;
// }
// const addtow = (num1, num2) => (num1 + num2);
// const addtow = (num1, num2) => num1 + num2
const addtow = (num1, num2) => ({ name: "himanshu" });

// console.log(addtow(3, 4));



// IIFE (Immediately invoked function expressions);

// function newfun() {
//     console.log(`DB connected`);

// }

// newfun();


(function newfun() {
    console.log(`DB connected one`);

})(); // ; this is semicolon is important

(() => {
    console.log(`DB connected two`);

})();  // ; this is semicolon is important

((name) => {
    console.log(`DB connected three ${name}`);

})('himanshu'); // ; this is semicolon is important
