"use strict";
const userName = 'Max';
let age = 30;
const add = (a, b) => a + b;
console.log(add(2, 5));
const add1 = (a, b = 1) => a + b;
console.log(add1(5));
const addNew = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
console.log(addNew(2, 3, 4, 5, 6));
const hobbies = ['c', 'i', 'a', 'o'];
const [h1, h2, ...rest] = hobbies;
console.log(rest);
const pe = {
    firstName: 'Marco',
    age: 26,
};
const { firstName, age: anni } = pe;
//# sourceMappingURL=app.js.map