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

// console.log(a);

// const a = 20; // ReferenceError

// let b = 50;
// console.log(b) // 50

// funcHoisting() // 70
// function funcHoisting(){
//     let a = 50;
//     let b = 20;
//     const sum = a + b;
//     console.log(sum)
// } 

// func(70,30) // ReferenceError
// const func = (num1, num2) => {
// let result = num1 + num2;
// console.log(result)
// }


// The Strict Mode 

// "use strict"
//  let a = 10;
//  console.log(a);

// Spread Operator

// let arr1 = [1,2,3,4];
// let arr2 = [...arr1,5,6,7,8];
// console.log(arr2);

// let obj1 = {a: 10, b: 30, c: 40};
// let obj2 = {...obj1, d: 50, e: 60, f: 70}

// console.log(obj2);

// Rest Operator/ Parameter

// function sum (...numbers){
  
//     let result = numbers.reduce((acc, num) => acc + num, 0);
//     console.log(result);
// };

// sum(100,50)

// ES6 Array De-Structring 

// let array = [10,20,30];

// let [num, num1, num2] = array;

// console.log(num, num1, num2);

// // ES6 Object De-Structring

// let obj = {a: 40, b: 60, c: 80};
// let {a,b,c} = obj;
// console.log(a,b,c);

// ES6 Function 

const result = (a,b) => {
    let sum = a * b;
    console.log(sum);
};
result(10,50)