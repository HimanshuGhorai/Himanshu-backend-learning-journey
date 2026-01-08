const now = new Date();
console.log(now);


const date = new Date();

const year = date.getFullYear();   // e.g. 2026
const month = date.getMonth();     // 0–11 (0 = January)
const day = date.getDate();        // 1–31
const hours = date.getHours();     // 0–23
const minutes = date.getMinutes();
const seconds = date.getSeconds();

console.log(year, month + 1, day);
