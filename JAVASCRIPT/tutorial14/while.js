var myArray = [];

var i = 0;
while(i < 5) {
myArray.push(i);
i++;
}

console.log(myArray);

// adding up 9+10+11+12 = 42
var ourArr = [9,10,11,12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr [i];
}

console.log(ourTotal);

// multiplying all array 

function multiplyAll(arr) {
    var product = 1 ;

    for (var i = 0 ; i < arr.length ; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]] );

console.log(product); // log ( product) = 5040


