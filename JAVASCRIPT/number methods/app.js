// number methods

//parseInt() method
//number
let number = "1000"

result = Number(number);

//parsefloat

result = parseFloat(10.5) //true

result = isFinite (-1) //true
result = isFinite (999999999) //true
result = isFinite ('intecbrussel') //false
result = isFinite ('intec123') //false
result = isFinite ('10x') //false 
result = isNaN(10) //false
result = isNaN('10') //false

let phoneNumber = '04882658985'

if(isFinite(phoneNumber)) {

    console.log("yes, it's a number"); //if true
}
else{
    console.log("Please use numbers only"); //false
}


//toFixed() method
let salary = 1600.5078 // rounded to "1601"
result = salary.toFixed()

function fixedSalary(employeesalary) {
    console.log("Employee salary is ",employeesalary.toFixed());
}

fixedSalary(salary)

console.log(result);