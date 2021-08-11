//loop from top to bottom

var total = 0;

for (var num = 100; num >= 0 ; num --) {
    total += num ;
}
console.log(total) // aading up from 0 to 100 = 5050

// while loops

var num = 0; // initializer

while (num< 11) {
console.log(num);
num++;
}

var sum = 0; //store all additions of numbers // final value

var num =0;

while (num < 10) {
sum += num;
num++;
}

console.log(sum);


// USE THE SPREAD OPERATOR TO EVALUATE ARRAYS IN PLACE

const arr1 = ['JAN','FEB','MAR','APR','MAY'];
let arr2;
(function() {
    arr2 = [...arr1]; // this line changed [...arr1]
    arr1[0] = 'potato'
} ) ();

console.log(arr2);



