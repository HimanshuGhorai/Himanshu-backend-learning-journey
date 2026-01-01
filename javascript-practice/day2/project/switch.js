// 4️⃣ Switch

// Print day name using number (1–7)

let day = 0;

switch (day) {
    case 1: console.log("sunday")
        break;
    case 2: console.log("monday")
        break;
    case 3: console.log("tuesday")
        break;
    case 4: console.log("wednesday")
        break;
    case 5: console.log("thursday")
        break;
    case 6: console.log("friday")
        break;
    case 7: console.log("saturday")
        break;

    default:
        console.log(`invalid day number`);


}



// Create a calculator using switch

let num1 = 12;
let num2 = 2;
let op = "+";
switch (op) {

    case "+": console.log(num1 + num2);
        break;
    case "-": console.log(num1 - num2);
        break;
    case "*": console.log(num1 * num2);
        break;
    case "/": console.log(num1 / num2);
        break;
    default: console.log(`enter velid number`);

}





// Print month name using month number

let month = 3;

switch (month) {

    case 1: console.log("Januray");
        break;
    case 2: console.log("Fabruary");
        break;
    case 3: console.log("March");
        break;
    case 4: console.log("Apil");
        break;
    case 5: console.log("May");
        break;
    case 6: console.log("June");
        break;
    case 7: console.log("July");
        break;
    case 8: console.log("August");
        break;
    case 9: console.log("Suptember");
        break;
    case 10: console.log("october");
        break;
    case 11: console.log("November");
        break;
    case 12: console.log("December");
        break;

    default: console.log(`enter valid number`);


}




// Print grade description using grade letter

let grade = 'A';

switch (grade.toUpperCase()) {
    case 'A':
        console.log("Excellent");
        break;
    case 'B':
        console.log("Good");
        break;
    case 'C':
        console.log("Average");
        break;
    default:
        console.log("Fail");


        break;
}