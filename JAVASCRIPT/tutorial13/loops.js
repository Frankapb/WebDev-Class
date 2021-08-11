// for of

let STUDENTS = ['Massimiliano','Hutu','Yasmine','Lalena','Marcio','Barsam','Mariam','Frank','Maryam','Sebastien','Mohammed','Roger']

for (let [index,name] of STUDENTS.entries()){
     console.log(`Index:${index}\nName:${name}`)
}

for(let [name] of STUDENTS){
     console.log(name)
}

// for(variable of array){

// }

for (let name of STUDENTS){
     console.log(name)
}

let people = [
    {
        name:"Jack1",
        age:20
    },
    {
        name:"Jack2",
        age:21
    },
    {
        name:"Jack3",
        age:22
    }
]

for(let person of people){
     console.log(person)
    person.email="root@root.com"
}
 console.log(people)

let schoolName = "INTECBRUSSEL"
let newPattern = ""
for(let letter of schoolName){
    // console.log(letter)
    newPattern += letter+":"
}

// first solution
let newStr = newPattern.split("") // converted array
newStr.pop() // remove last char
newPattern = newStr.join(""); // converted to string again


// second solution
//newPattern.slice(0,-1)
 console.log(newPattern.slice(0,-1))

 console.log(newPattern)

// FOR IN loop

let student = {
    fullname:"Joe Dalton",
    age:25,
    job:"FullStack Developer"
}

for(props in student){
     console.log("Property:",props)
     console.log("PropertyValue:",student[props])
}

let newStudents=[
    {
        fullname:"Joe Dalton1",
        age:25,
        job:"FullStack Developer"
    },
    {
        fullname:"Joe Dalton2",
        age:25,
        job:"FullStack Developer"
    },
    {
        fullname:"Joe Dalton3",
        age:25,
        job:"FullStack Developer"
    }
]

for(student in newStudents){
    console.log(newStudents[student]);
    newStudents[student].email="root@root.com"
}

console.log(newStudents);

for(letter in schoolName){
    console.log(schoolName.charAt(letter));
    console.log(schoolName[letter]);
}