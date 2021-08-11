class Students {
    constructor(name){
        this.name = name;
     }

    static addStudent(name){
        return name;
    }

    printIt(){
        console.log(Students.addStudent(this.name));
    }

     static show(){ // without parameter
         console.log(`hello ${this.name}`);
     }

     static show1(name){  //with parameter
        console.log(`hello ${name}`);

     }
}

// tried access to mmethods
Students.show();
Students.show1();

// create obj 
const st1 = new Students('joe dalton');
// st1.show();
st1.printIt()



class person {
    constructor(name){
        this.name = name
    }

    // utility method
    static getName(name){
        return name
    }

    print(){
        console.log(person.getName(this.name));
    }
}

// new person
const person1 = new person("joe jones");
person1.print();

console.log(person.getName("mike"));  // instant usage of static method



class childClass extends person{

}

console.log(childClass.getName("this is childClass"));

