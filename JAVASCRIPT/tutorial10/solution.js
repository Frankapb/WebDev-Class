let students = [

    { name: 'Student', scores: [10, 20, 30, 40, 50] },

    { name: 'Student1', scores: [10, 20, 70, 40, 50] },

    { name: 'Student2', scores: [10, 30, 40, 50] },

    { name: 'Student3', scores: [10, 40, 50] }

]



function getStudents(obj) {

    const totalScores = obj.scores.reduce(

        function (prev, current, index) {

            return prev + current

        }

    )

    console.log(totalScores)

    obj.totalScore = totalScores

    return obj

}



function whoPassed(obj) {

    return obj.totalScore >= 130

}




let result = students.map(getStudents).filter(whoPassed)



console.log(result)