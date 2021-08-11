function Movie(id,title){
    console.log('hello connstrucutor');
    this.id = id;
    this.title = title;

    this.printMovie = function(){
        console.log(`Movie title is ${this.title}`);
    }
 }
let movie1 = new Movie(1,'joker and harley');
let movie2 =new Movie(2,'black mirror')

movie1.printMovie();
movie2.printMovie();


console.log();
Movie.testMethod = function(){
    console.log('hello function');
}

let myNewObject = {
    id:1,
    user:'root',
    print:function(){
        console.log(this.user);
    }
}

    myNewObject.print();
    myNewObject.testProp = 'it works'
    console.log(myNewObject);