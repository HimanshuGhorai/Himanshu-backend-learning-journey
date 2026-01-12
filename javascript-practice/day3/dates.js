// const now = new Date();
// console.log(now);

// const { useEffect } = require("react");


// const date = new Date();

// const year = date.getFullYear();   // e.g. 2026
// const month = date.getMonth();     // 0–11 (0 = January)
// const day = date.getDate();        // 1–31
// const hours = date.getHours();     // 0–23
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();

// console.log(year, month + 1, day);


// Object Basics

// reate a simple object Access object properties

// const obj = {
//     name: "himanshu",
//     age: 24,
//     sem: 5

// }

// console.log(obj["name"]);
// console.log(obj.name);

// Add a new property

// obj.email = "himanshu000@gmail.com";
// // Update a property like email

// obj.email = "himanshu111@gmail.com";
// console.log(obj.email);


const mysmb = Symbol("key");
const userobj = {
    name: "himu",
    [mysmb]: "my Key 2",
    "Full Name": "Himanshu Ghorai",
    age: 24,
    location: "West Bengal",
    email: "himanshu@google.com",
    isLoggedIn: false,
    lastLoginDey: ["Monday", "Saturday"]

}
// Object.freeze(userobj);
// console.log(userobj);

// console.log(userobj["Full Name"]);
// console.log(userobj.name);
// console.log(typeof userobj.mysmb);
// console.log(userobj.age);


userobj.greeting = function () {
    // console.log("Helo Js User ");

}


// const tender = new Object();
const tender = {};
tender.id = "123abc";
tender.user = "meal";
tender.name = "himu";
tender.isLoggedIn = true;

// console.log(tender);


const regularUser = {
    email: "some@gamil.com",
    fullName: {
        userFullName: {
            FirstName: "Himanshu",
            lastName: "Gahorai"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.FirstName);


const obj1 = {
    1: "a",
    2: "b",
}

const obj2 = {
    3: "c",
    4: "d",
}

// const obj4 = {
//     obj1, obj2
// }

// const obj4 = Object.assign({}, obj1, obj2)
const obj3 = { ...obj1, ...obj2 }
// console.log(obj3);




const course = {
    courseName: "js",
    price: "999",
    coruseInstrutor: "himu"
}

// console.log(course.coruseInstrutor);

const { coruseInstrutor } = course;

console.log(coruseInstrutor);

// {
//     courseName: "js",
//         price: "999",
//             coruseInstrutor: "himu"
// } this is a json demo