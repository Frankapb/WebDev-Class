/*************** */
function factorial(n) {
    if (n==0) {
        return 1;
    } else {
        return factorial(n-1) * n;
    }
}

console.log(factorial(8));  // multiplying loop 

// ******************
// let theNumber = Number(prompt("pick a number"));
// if (!Number.isNaN(theNumber)){
//     console.log("Your number is the square root of" + theNumber * theNumber);
// } else {
//     console.log("Hey why did`t you give me a number");
// }


//********************* LOOPING A TRIANGLE
for (var triangle = "#"; triangle.length <= 7; triangle += "#")
console.log(triangle);  /*  
result 
# 
##
###
####
#####
######
#######
*/

//  FIZZBUZZ
for (var i = 1; i <= 100; i++) {
    if (i%3==0 && i%5==0)
    console.log("FizzBuzz");
     else if (i%3==0)
     console.log("Fizz");
     else if (i%5==0)
     console.log("Buzz");
     else 
     console.log(i);
}
for (var i = 1; i <= 100; i++) {
    var output = "";
    if (i %3==0)
    output = "Fizz"
    if (i%5==0)
    output += ("Buzz")
    console.log(output || i);
}

// CHESS BOARD 
// var gridSize = Number(prompt("enter size of the grid", "8"));
// var totalSize = (gridSize * gridSize) + gridSize;
// var grid = "";
// for (i = 0; i < totalSize; i++) {
//     if (i%(gridSize + 1)==0)
//     grid += "\n" ;
//     else if (i % 2 == 0)
//     grid += "#";
//     else grid += "";
// }

// console.log(grid);

//************ FUNCTION SAMPLES */

const makeNoise = function () {
    console.log("pling");
};

makeNoise ();







