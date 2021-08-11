// INHERITANCE
// POLYMORPHISM

// EcmaScript v6 clas based JS application
// EcmaScript v5 function based JS application

// PARENT class

class Person{
    constructor(username){
        this.username = username
    }

    show(){
        console.log(`hello ${this.username}`);
    }
}

// child class

class Student extends Person {

    constructor(username,portfolio){
        super(username)
        this.portfolio = portfolio

    }
    
    show(){
        console.log(`hello ${this.username} and my portfolio is ${this.portfolio}`);
    }


}

class Teacher extends Person {

    constructor(username,subject){
        super(username)
        this.subject = subject
    }

    show(){
        console.log(`hello ${this.username} and subject is ${this.subject}`);
    }

}


const person = new Person("jack")
person.show();

const st1 = new Student("joe","movieCMS App");
st1.show();

const t1 = new Teacher("ip man","class inheritance")
t1.show();