let data = [1,2,3,4,5,6,true,false,'intec','frank'];

console.log(data[8]); //intec  

const [item1,item2,utem3,item4,item5,item6,item7,item8,item9] = data;

console.log(item9); //intec item9 in data

// *********

// let studentInfo = {
//     name: "joe",
//     lastname:"dalton",
//     location:{
//         country:"USA",
//         city:"texas"
//     }
// }

// let {location:{country,city}} = studentInfo;
// let {name,lastname} = studentInfo

// console.log(country,city,name,lastname); //USA, texas, joe, dalton

//***********

let person = {
    name :"Joe",
    age : 25,
    salary : 5000,
    printInfo: function() {
        console.log(this.name,this.age,this.salary);
    }
}

const {name:FULLNAME,age:AGE,salary:MAX,printInfo}=person


console.log(FULLNAME,AGE,MAX); // joe , 25, 5000
printInfo()

//**************** */
const obj = {
    a:1,
    b:2,
    c:3,
    d:4
}

const {a:number1,b:number2,c:number3,d:number4} = obj

console.log(number1,number2,number3,number4); //1 2 3 4



