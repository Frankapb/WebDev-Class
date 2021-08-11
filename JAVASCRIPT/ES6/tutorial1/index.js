// function

function Student1(){
    this.name = 'jack'
    this.age = 30
}

const student1 = new Student1();

// es6

// class Student {
//     constructor(name,age){
//         this.name = name ;
//         this.age = age;
//     }


// }


class Student {
    constructor(role="visitor"){
        this.role = role;
    }

    // method
    showStudent(name,age){
        return `my name is ${name} and I'm ${age} years old.\nRole: ${this.role}`
    }

    addStudent(name,age){
        return localStorage.setItem('students',JSON.stringify({name,age}))
    }

}

const st1 = new Student("admin");
const st2 = new Student();

console.log(st2.showStudent('mike',29));
console.log(st1.showStudent("jack",30));
// st1.addStudent('jack',30)

