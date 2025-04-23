// ES6 Variables 

// let a = 10;
// const b = 20;

// console.log(a + b);

// Variable Scope 


// Initialize a global variable

const a = 20;

function varScope(){
// Initialize a block-scoped variable

   let a = 30;
    console.log("Variable from inside the function : " + a);
}
varScope()
console.log("Variable from outside the function : " + a);