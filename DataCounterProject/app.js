
let current_date = new Date();
let new_date = new Date('June 1 2021');
let totaltime = (new_date - current_date)/1000
/*
days = totaltime/3600/24
hours (totaltime/3600) % 24
mins (totaltime/60) %60
seconds totaltime % 60
*/
console.log(new_date)

console.log(totaltime)

console.log(current_date)

let i =0
setInterval(function(){
    i++
    console.log('hi there',i)
},10000)