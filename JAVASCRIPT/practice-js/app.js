
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


//Use conditional logic with If statements
function ourTrueOrFalse (isItTrue) {
if (isItTrue) {
    return "Yes, it's true";
}
return "No, it's false";
}

function trueOrFalse(wasThatTrue) {
if (wasThatTrue) {
    return "Yes; that was true";
}
return "No, that was false";
} 

console.log(trueOrFalse (true)); 



comment = "                       intecbrussel                              "
result = comment.trim();
result = comment.trimLeft();
result = comment.trimRight();
result = comment.trimEnd();

//concat
let str1="Intec";
let str2="brussel";
let num1= "123"

result = str1.concat(str2)

result = num1.concat('456')


//charCode
result = str1.charAt(0);
result = str1.charCodeAt(0) //result=73 check in wikipedia latin alphabet uppercase "I" (DECIMAL FORMAT)

//converting string into array
let data = "Maryam Yasmine Lalena Hutu Marcio Kabbaj Barsam Frank"

//split method

result = data.split(" ") //space is added to identify names separetly.

console.log(result);

// Using Objects for Lookups

function phoneticLookup(val) {
    var result = "";
  
   var lookup = {
  
      "alpha" : "Adams",
      "bravo" : "Boston",
      "charlie" : "Chicago",
      "delta" : "Denver",
      "echo" : "Easy",
      "foxtrot" : "Frank"
  };
  
  result = lookup[val];
  
    
    return result;
  }
  
 console.log(phoneticLookup("echo"));
 
 
 // Counting cards

var count = 0;
  
 function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        count++;
        break;

        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
        count--;
        break;                    

}
    var holdbet = 'Hold'
    if(count > 0) {
        holdbet = 'Bet'
    }

    return count + " " + holdbet;

}
  
cc(2); cc(3); cc(7); cc("K"); cc("A");
 console.log(cc("A"));













