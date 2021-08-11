//ARRAY METHODS
let result;

let numbers = [1,2,3,4,5,6,7,8,9]

let movie_categories = ['Comedy','Action','Sci-fi','Thriller','Fantasy']

let students = [
    {id:1,fullname:'Joe Dalton',age: 100, profession:'Pirate'}
]
//PUSH()

numbers.push(10)
movie_categories.push('Horror')
result = movie_categories


let newStudent = {
    id:2,fullname:'Mike',age:50,profession:'Pirate'
}
students.push(newStudent)

result = students

//join() method 

result =  movie_categories.join("----") // 'join' is used to eliminate the comas for different symbol

console.log(result);

//pop() method
numbers.pop() //remove last element of an array
result = numbers 


//shift
numbers.shift() // removes first element of an array
result = numbers 


//some() method
result = numbers.some(function(value){
    return value >=8
})


//every method
//Determines whether all the members of an array satisfy the specified test.

function everyCallBackFunc(value){
    return 2>=1 //true
}

result = numbers.every(everyCallBackFunc)

//reduce method
//Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
numbers.reduce(function(total,current,index,arrayitself){
    console.log(`Total: ${total}\nCurrent: ${current}\nIndex: ${index}\nArrayItself: ${arrayitself}`);
    return total = total+current;
})

//unshift method
//Inserts new elements at the start of an array, and returns the new length of the array.
numbers.unshift(-1)
numbers.unshift('hello')
//[ 'hello', -1, 2, 3, 4, 5, 6, 7, 8, 9 ]

result = numbers


//MAP METHOD 

numbers.map(function(element,index){
    console.log(`Element:${element}`);
})//map for numbers


function getAllMovies(value,index){
    console.log(`Movie category:${value}\nIndex:${index}`);
}

movie_categories.map(getAllMovies)


 result = students


console.log(result);

let student =[
    {
        fullname:'ali veli'
    },
    {
        fullname:'veli'
    }
]
student.map(function(singledata,index){
    console.log(singledata.fullname);
})

//for each method

student.forEach(function(x,i){
    console.log(x.fullname);
})

//flat()
let multimensionalArray= [1,2,3,4,5,6,7,8,[9,10,11,12,13,[14,15,16,17,18,[,19,20]]]]
result = multimensionalArray.flat(3)