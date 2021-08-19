let students = [{
    id:1,
    name:'Joe',
    pass:'123'
},
{
    id:2,
    name:'Joe2',
    pass:'123'
},
{
    id:3,
    name:'Joe3',
    pass:'123'
}]


students.forEach(student=>console.log(student))

function getSingleStudent(id){
    console.log(students[id],"single student object");
}

getSingleStudent(2)