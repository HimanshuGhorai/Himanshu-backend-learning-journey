// What is an Object in JavaScript?
// An object is a collection of related data and functionality. Think of it as a "thing" with properties

const person = {
    name: "Himanshu",
    age: 23,
    city: "Kolkata"
};

// Q1️⃣ Create an object called student

const student = {
    name: "himanshu",
    rollNumber: 21,
    marks: 89
};

// Access object values

console.log(student.name);
console.log(student.rollNumber);
console.log(student.marks);


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success!");
    }, 1000);
});


promise.then(result => {
    console.log(result);
});

fetch("/api/data")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
    .finally(() => console.log("Request finished"));
