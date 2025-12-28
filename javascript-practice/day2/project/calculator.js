// Simple Command Line Calculator

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return "Error: Cannot divide by zero";
    return a / b;
}

function calculator() {
    console.log("=== Simple Calculator ===");
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");
    console.log("5. Exit");

    // In real app, you'd take user input
    // For now, let's test with sample values

    const operation = 1; // Change this to test different operations
    const num1 = 10;
    const num2 = 5;

    let result;

    switch (operation) {
        case 1:
            result = add(num1, num2);
            console.log(`${num1} + ${num2} = ${result}`);
            break;
        case 2:
            result = subtract(num1, num2);
            console.log(`${num1} - ${num2} = ${result}`);
            break;
        case 3:
            result = multiply(num1, num2);
            console.log(`${num1} * ${num2} = ${result}`);
            break;
        case 4:
            result = divide(num1, num2);
            console.log(`${num1} / ${num2} = ${result}`);
            break;
        default:
            console.log("Invalid operation");
    }
}

// Run the calculator
calculator();