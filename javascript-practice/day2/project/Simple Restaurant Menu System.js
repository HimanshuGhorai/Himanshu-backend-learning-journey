// Simple Restaurant Menu System
console.log("=== RESTAURANT MENU SYSTEM ===\n");

const menu = {
    1: { name: "Pizza", price: 250, category: "Main Course" },
    2: { name: "Burger", price: 120, category: "Fast Food" },
    3: { name: "Pasta", price: 180, category: "Main Course" },
    4: { name: "Salad", price: 100, category: "Healthy" },
    5: { name: "Ice Cream", price: 80, category: "Dessert" },
    6: { name: "Coffee", price: 60, category: "Beverage" }
};

function displayMenu() {
    console.log("=== MENU ===");
    for (let key in menu) {
        const item = menu[key];
        console.log(`${key}. ${item.name} - ₹${item.price} (${item.category})`);
    }
}

function placeOrder(itemNumber, quantity) {
    let total = 0;
    let orderDetails = "";

    switch (itemNumber) {
        case 1:
            total = menu[1].price * quantity;
            orderDetails = `${quantity} × Pizza = ₹${total}`;
            break;
        case 2:
            total = menu[2].price * quantity;
            orderDetails = `${quantity} × Burger = ₹${total}`;
            break;
        case 3:
            total = menu[3].price * quantity;
            orderDetails = `${quantity} × Pasta = ₹${total}`;
            break;
        case 4:
            total = menu[4].price * quantity;
            orderDetails = `${quantity} × Salad = ₹${total}`;
            break;
        case 5:
            total = menu[5].price * quantity;
            orderDetails = `${quantity} × Ice Cream = ₹${total}`;
            break;
        case 6:
            total = menu[6].price * quantity;
            orderDetails = `${quantity} × Coffee = ₹${total}`;
            break;
        default:
            return "Invalid item number!";
    }

    return {
        order: orderDetails,
        total: total
    };
}

function applyDiscount(totalBill, userType) {
    let discount = 0;
    let finalBill = totalBill;

    switch (userType.toLowerCase()) {
        case "student":
            discount = totalBill * 0.10; // 10% discount
            finalBill = totalBill - discount;
            console.log(`Student discount applied: ₹${discount} off`);
            break;
        case "regular":
            discount = totalBill * 0.05; // 5% discount
            finalBill = totalBill - discount;
            console.log(`Regular customer discount: ₹${discount} off`);
            break;
        case "vip":
            discount = totalBill * 0.15; // 15% discount
            finalBill = totalBill - discount;
            console.log(`VIP discount: ₹${discount} off`);
            break;
        default:
            console.log("No discount applied");
    }

    return finalBill;
}

// Test the system
console.log("Test Order 1:");
displayMenu();
const order1 = placeOrder(1, 2); // 2 Pizzas
console.log(order1.order);

console.log("\nTest Order 2:");
const order2 = placeOrder(6, 3); // 3 Coffees
console.log(order2.order);

console.log("\n=== DISCOUNT CALCULATION ===");
const totalBill = order1.total + order2.total;
console.log(`Total before discount: ₹${totalBill}`);

console.log("\nAs Student:");
const studentBill = applyDiscount(totalBill, "student");
console.log(`Final bill: ₹${studentBill}`);

console.log("\nAs VIP:");
const vipBill = applyDiscount(totalBill, "vip");
console.log(`Final bill: ₹${vipBill}`);