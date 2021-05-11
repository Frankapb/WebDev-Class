var person = {
name:"Alexander",
surname:"Jones",
age:37,
hobbies:{
sports:["Basketball"," Baseball"," Football",],
others:['traveling',' cooking',' coding']
},//hobbies
days:[1,2,3,4,5,6,7]
}//var candidate

output =  `

My name is ${person.name} ${person.surname}. I am ${person.age} years old.
My favorite hobbies are to do sports like ${person.hobbies.sports.toString()}.
When I have extra off time I use it for ${person.hobbies.others.toString()}.
Normally I spend day number ${person.days[1]} ${person.hobbies.others[2]} and 
day number ${person.days[3]} playing ${person.hobbies.sports[0]}.

`

console.log(output);


function sum(x,y,z,w) {

console.log((x+y)*(z+w));

}

sum(2,4,3,5);


//another function
function myFunction(){
return `data`+`type`

}

var x = myFunction();
console.log(x); //datatype


//another function
function sayMyName(fullname){
console.log(`Your name is ${fullname}`);

}

sayMyName('Alexander Jones');

let person = {
first:'Alexander',
last:'Jones'

}

function getUser(obj){
console.log("user:" obj.first);

}

let nullObject = {}

getUser (person);








