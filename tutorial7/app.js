let student = {
    firstname:"Roderik",
    lastname:"Van Haarlem", // string
    age:29, // integer/number
    hobbies:{ // object
        games:["valorant","pubg mobile"],
        authors:['nietzsche','freud','tim ferris']
    },
    scores:[50,40,80,60,20,100] // array
}

// classic way
let output = "My name is " + student.firstname + " " + student.lastname + " and i'm " +  student.age + " years old. My hobbies are playing games; " + student.hobbies.games.toString()
+ " and my favorite authors are" + student.hobbies.authors.toString() + "\nAll Scores:" + student.scores.toString();

// modern way - template literal

output = `
My name is ${student.firstname} ${student.lastname} and i'm ${student.age} years old.
My hobbies are playing games; ${student.hobbies.games.toString()}
and my favorite authors are ${student.hobbies.authors.toString()}
All Scores: ${student.scores.toString()}
`

console.log(output)


// functions

function sum(x,y){
    
    // console.log(x,y)
    console.log(x+y)
    // return x+y
}

// document.getElementById('output').innerHTML=sum(1,10);

sum(1,10);

function myFunction(){
  //  console.log('before return data')
    return `data`
}


let x = myFunction();
console.log(x)

function sayMyName(name){
    console.log(`Your name is ${name}`)
}

sayMyName('Joe Dalton');


let person = {
    first:'Joe',
    last:'Dalton'
}


function getUser(obj){
    console.log("user:",obj.first)
}

let nullObject = {}

getUser(person);


let pers0n ={
    fullname:"Joe Dalton",
    age:29,
    email:"joe@joe.com",
    country:"Krypton",
    printPersonInfo:function(){
        console.log('hello')
        console.log(`${pers0n.fullname}\n${pers0n.age}\n${pers0n.email}\n${pers0n.country}`)
    }
}


pers0n.printPersonInfo();




let autoController = {
    forward:function(){console.log('Go to Forward')},
    backward:function(){console.log('Go to Backward');},
    turnleft:function(){console.log('Turn left')},
    turnright:function(){console.log('Turn right');}
}


autoController.forward();
autoController.turnleft();
autoController.forward();
autoController.turnright();

let globalVariable = 5;


function getValue(){
    console.log(globalVariable)
    let localVariable = 10;
    console.log(localVariable)
}

getValue();
//console.log(localVariable)