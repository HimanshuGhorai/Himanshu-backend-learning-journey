//PROBLEM 1: Day of the Week

// let day = 2;

// switch (day) {
//     case 1: console.log("to day is Sunday")
//         break;
//     case 2: console.log("to day is Monday")
//         break;
//     case 3: console.log("to day is Tuesday")
//         break;
//     case 4: console.log("to day is Wednesday")
//         break;
//     case 5: console.log("to day is Thursday")
//         break;
//     case 6: console.log("to day is Friday")
//         break;
//     case 7: console.log("to day is Saturday")
//         break;





//     default: console.log("Enter the valid date");
//         ;
// }

// console.log(day);


// Calculator

// this is me 
// let a = 6;
// let b = 4;
// let op = "-";

// switch (true) {
//     case (op === "*"):
//         console.log(a * b);
//         break;
//     case (op === "+"):
//         console.log(a + b);
//         break;
//     case (op === "/"):
//         console.log(a / b);
//         break;
//     case (op === "-"):
//         console.log(a - b);
//         break;    
// }


// Calculator (clean version ai)

let a = 6;
let b = 4;
let op = "-";

switch (op) {
    case "*":
        console.log(a * b);
        break;
    case "+":
        console.log(a + b);
        break;
    case "/":
        console.log(a / b);
        if (b === 0) {
            console.log("can't divide by zero");

        } else {
            console.log(a / b);

        }
        break;
    case "-":
        console.log(a - b);
        break;
    default:
        console.log("Invalid operator");
}
