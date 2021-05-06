const x = 1; // global scope variable
let y = 5;

console.log(y, "before function")

function run(){

const x = 2; //
console.log(x)

y = 10 
console.log(y, "in function")

}

run();

console.log(y, "out of function")

console.log(x)