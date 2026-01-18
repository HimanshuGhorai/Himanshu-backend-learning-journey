
const month = 3;

switch (month) {
    case 1:
        console.log('january');
        break;
    case 2:
        console.log('fab');
        break;
    case 3:
        console.log('march');
        break;
    case 4:
        console.log('april');
        break;

    default:
        console.log('defult code mach');
        break;
}

let age = 20;

if (age >= 18) {
    console.log("Adult");
} else if (age >= 13) {
    console.log("Teenager");
} else {
    console.log("Child");
}


let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Unknown day");
}

for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);
}


for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i);
}


let score = 80;
let result = score >= 50 ? "Pass" : "Fail";
console.log(result);


try {
    let x = JSON.parse("invalid");
} catch (error) {
    console.log("Error caught");
} finally {
    console.log("Finished");
}



function checkNumber(n) {
    if (n < 0) return "Negative";
    return "Positive";
}

console.log(checkNumber(-10));
