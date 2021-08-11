//data types

/*

number
string
object
array
undefined
null
function
*/

let numberDataType = 10;
let stringDataType = "intecbrussel's building";

let objDataType = {
    name:'Joe',
    familyname:'Dalton',
    age:21,
    showPerson:function(){
        console.log('hello its from showperson')

    },
    scores:{
        javascript:100,
        java:90,
        php:80,
        golang:60,
       

    }

}

objDataType.name="Michael"
objDataType.familyname="Joe"
objDataType.age=31

    console.log("RESULT=>",objDataType.name, objDataType.familyname, objDataType.age)

objDataType.showPerson();


console.log(objDataType)

// array data type
let myArray = ['Frank','Barsam','Lalena','Mariam','Marcio','Maryam']

let extractSingleArrayItem = myArray[0];

console.log(myArray[]);

