let myString;
let mySimpleArray
let nestedArray;
let singleobject;

// regular for loop
// for in
// for of

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let output4 = []

/*
Output 1) 0 100 200 300 400 500 600 700 800 900 1000
Output 2) 1 2 4 8 16 32 64 128
Output 3) 0 2 4 6 8 10
Output 4) 3 6 9 12 
Output 5) 9 8 7 6 5 4 3 2 1 0
*/

// Output 1
for (n of numbers) {
    let x = n * 100
    console.log("output1", x)
}

// Output 2
for (n of numbers) {
    let x = Math.pow(2, n)
    console.log("output2", x)
    if (x == 128) {
        break;
    }
}

// Output 3
for (n of numbers) {
    if (n % 2 == 0) {
        console.log("output3", n)
    }

}

// Output 4
for (n of numbers) {
    if (n % 2 !== 0) {
        console.log("output4", (n + (Math.ceil(n / 2) + 1)))
    }

}

// Output 5
for(n of numbers.reverse()){
    if(n<10){
        console.log("output5",n)
    }
}