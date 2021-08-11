// HTTP REQUESTS 
// http://localhost:3000/students
const api_url = "http://localhost:3000/students";

const [get, post, del, update,find] = document.querySelectorAll('button')
const [fullname,email,findstudent] = document.querySelectorAll('input')

// GET HTTP REQUEST
get.addEventListener('click', e => {
    e.preventDefault();
    fetch(api_url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
})


// POST HTTP REQUEST
post.addEventListener('click', e => {
    e.preventDefault();
    let newStudent = {
        name:fullname.value,
        email:email.value,
        _id: new Date().valueOf()
    }

    console.log(newStudent)
    fetch(api_url,{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(newStudent)
    })
    .then(response=>{
        console.log(response)
    })

})


// DELETE HTTP REQUEST
del.addEventListener('click',e=>{
    e.preventDefault();
    fetch(`${api_url}/5`,{
        method:'DELETE'
    })
    .then(res=>{
        console.log(res)
    })

})

update.addEventListener('click',e=>{
    e.preventDefault()
    let updatedRecord = {
        name:fullname.value,
        email:email.value
    }
    console.log(updatedRecord)
    fetch(`${api_url}/3`,{
        method:'PUT',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(updatedRecord)
    }).then(res=>{
        console.log(res)
    })
})

find.addEventListener('click',e=>{
    e.preventDefault();
    fetch(`${api_url}/?q=${findstudent.value}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
})