let tools = {
    getName:function(name){
        console.log(`my name is ${name}`);
    
    },
    getSumOfNumbers: function(a,b){
        let result = a+b
        console.log(`result=> ${result}`);
    },
    getStudentNames: function(...arg){
        arg.forEach(name=>{
            console.log(`student:${name}`);
        })
    }
}

module.exports = tools 