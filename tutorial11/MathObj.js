//Math object
let result;

//PI number
result = Math.PI

//round methods
result = Math.round(9.5)
result = Math.round(9.4)

//powr method
result = Math.pow(9,2)

//find square root of a number

result = Math.sqrt(64)
result = Math.sqrt(36)
result = Math.sqrt(16)
result = Math.sqrt(8)

// absolute positive 
result = Math.abs(-10)
result = Math.abs("-1")

// Sinus and cosenus  Sin-Cons

result = Math.sin(90*Math.PI/180)
result = Math.cos(0*Math.PI/180)

//floor - ceil method  

result = Math.floor(9.5)
result = Math.floor(9.6)

// generate nummbers with random () method 

result = Math.random(); // 0.1 - 0.9
result = Math.random()*10 - 1-9
result = Math.floor(Math.random()*10) //0-9
result = Math.floor(Math.random()*10) //0-9


function GenNumbers(min,max){
    console.log (((max-min)+1)+min);
    let number = Math.floor(Math.random()*(max-min)+1)
}
 GenNumbers (3,9)
 
console.log(result)