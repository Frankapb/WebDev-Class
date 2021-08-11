// // this keyword

// let obj_person = {
//     fullname:'Joe dalton',
//     email:'root@root.com',
//     PrintInfo: function(){
//         console.log(this.fullname)
//     }
// }

// function showMewhereIam(){
//     function x (){
//         console.log(this)
//     }
//     x()
// }


// // [global] this == window > true 

// //console.log(this,'global')
// // obj_person.PrintInfo()

// showMewhereIam()


let student = {
    name: 'Joe',
    age: 21,
    email: 'joe@joe.com',
    password: '1212121212',
    show: function () {
        console.log('hello')
        let result = `NAME:${this.name}`
        console.log(result)
    }
}

student.show()


// let p = document.querySelector('p')

// p.addEventListener('click',(e)=>{
//     return e.target.style.display='none'
// })

//console.log(document.querySelector('a'));


let all_li = document.querySelectorAll('li')
console.log(all_li) // all li elements
all_li.forEach(li => {
    console.log(li) // single li element
    li.addEventListener('click', (e) => {
        console.log(e.target) // access to each li element
        e.target.style.display = 'none'

    })
})