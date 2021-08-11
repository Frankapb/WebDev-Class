var students = [
    {name:'Marcio',score:[52]},
    {name:'Mariam',score:[45]},
    {name:'Maryam',score:[50]},
    {name:'Roger',score:[68]},
    {name:'Yasmine',score:[55]},
    {name:'Lalena',score:[60]},
    {name:'Frank',score:[56]},
    {name:'Sebastien',score:[62]},
    {name:'Barsam',score:[46]},
    {name:'Hutu',score:[44]},
    {name:'Massimiliano',score:[47]},
    {name:'Kabbaj',score:[68]},

]

let scores = [52,45,50,68,55,60,56,62,46,44,47,68]



let languages = ['HTML','CSS','JAVASCRIPT']

result = students.filter(function(x){
    return x.score >=50 //
})

// map

scores.map(function(element,index){
    console.log(`Element:${element}`);
})


if (score =>50) {
    console.log('Passed the exam');
}

else if (score <=50) {
    console.log('Did not pass the exam');
}


console.log(result);





