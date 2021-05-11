
// (name=parameter)
function greet(name, lastName) {
console.log('hello ' + name + ' ' +lastName);

}
//John= value applied for the parameter
greet ('John', 'Smith'); 

var myVar = 11;
myVar --;
console.log(myVar);

var product = 2.0 * 2.5;
console.log(product);

var quotient = 4.4 / 2.0;
console.log(quotient);

var remainder;
remainder = 11 % 3;
console.log(remainder);

var firstName = "Alan";
var lastName = "Walker";
console.log(firstName, lastName);

/*
 \'     single quote
 \""    double quote
 \\    backslash
 \n    newline
 \r     carriage return
 \t     tab
 \b     backspace
 \f     form feed
 
 */

 var myStr = "Firstline\n\t\\SecondLine\nThirdLine"
console.log(myStr);


var anAdjective = "awesome!";
var myStr = "Learning to code is ";
myStr += anAdjective;
console.log(myStr);

// find length of string 
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;
console.log(firstNameLength);

var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;
console.log(lastNameLength);

// bracket notation to find first character in string
var firstLetterOffFirstName = "";
var firstName = "Ada";

firstLetterOffFirstName = firstName[0];
console.log(firstLetterOffFirstName);

var firstLetterOffLastName = "";
var lastName = "Lovelace";

firstLetterOffLastName = lastName[0];
console.log(firstLetterOffLastName);

// string immutability
var myStr = "Jello world";
myStr = "Hello world";
console.log(myStr);


//word blanks
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
var result = "";
result += "The" + myAdjective + myNoun + myVerb + myAdverb +" to the store."

return result;
}

console.log(wordBlanks("dog ", " big ", "ran ", "quickly"));
console.log(wordBlanks("bike", " slow ", " flew ", "slowly"));


// STORE MULTIPLE VALUES WITH ARRAYS
var ourArray = ["John", 23];
console.log(ourArray);
var myArray = ["Quincy", 1];
console.log(myArray);


//MODIFY ARRAY DATA WITH INDEXES
var ourArray = [18,65,98];
ourArray[1] = 48; //second array should be now 48 
console.log(ourArray);


//NESTED ARRAYS
var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2]];
console.log(myList [2]);

// REUSABLE CODE WITH FUNCTIONS
function ourReusableFunction() {
console.log("hello world");

}
ourReusableFunction();
ourReusableFunction();

function myReusableFunction(){
    console.log("What`s up world");
}
myReusableFunction();
myReusableFunction();


// RETURN A VALUE FROM A FUNCTION WITH RETURN
function minusSeven(num) {

    return num -7;
}

console.log(minusSeven(20));

function timesFive(num) {
    return num * 5;
}

console.log(timesFive(15));















