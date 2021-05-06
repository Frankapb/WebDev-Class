let curriculumVitae= [

    { person: "information",
     details:[
     "Alexander",
     "Jones",
     "Flowerhills",
     "Ireland",
     "Dublin",
     "Master of Science in Accounting and Finance",
     
 ] //array1

},

{ period: "collegeStudies",
details: [
"five years",
"2004",
]//array2

},

{ person: "place",
details:[
"Trinity college",
"Dublin Center",

]//array3

}

]

console.log("Hi my name is "+ curriculumVitae[0].details[0]+" "+curriculumVitae[0].details[1]
+". I am from "+ curriculumVitae[0].details[3]+" and I currently live in "+curriculumVitae[0].details[2]+" "+curriculumVitae[0].details[4]+
". I`ve recently graduated as "+curriculumVitae[0].details[5]+" and complete my studies in "+ curriculumVitae[1].details[0] + " in "+curriculumVitae[1].details[1]+
". The location of "+curriculumVitae[2].details[0] + " is in "+curriculumVitae[2].details[1]);