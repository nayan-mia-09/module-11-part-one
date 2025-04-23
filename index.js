// ES6 Variables 

// let a = 10;
// const b = 20;

// console.log(a + b);

// Variable Scope 


// Initialize a global variable

// const a = 20;

// function varScope(){
// // Initialize a block-scoped variable

//    let a = 30;
//     console.log("Variable from inside the function : " + a);
// }
// varScope()
// console.log("Variable from outside the function : " + a);

// Hoisting 

console.log(a);

const a = 20; // ReferenceError

let b = 50;
console.log(b) // 50

funcHoisting() // 70
function funcHoisting(){
    let a = 50;
    let b = 20;
    const sum = a + b;
    console.log(sum)
} 

func(70,30) // ReferenceError
const func = (num1, num2) => {
let result = num1 + num2;
console.log(result)
}

