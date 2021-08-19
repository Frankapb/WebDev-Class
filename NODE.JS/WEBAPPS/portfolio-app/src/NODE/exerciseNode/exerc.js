// nodejs
// http > createserver > request > url paths
// if else
 
// http://localhost:3000/user
 
// http://localhost:3000/admin

// /user

// > welcome to user dasboard

// / admin

// > welcome to admin dasboard


// const http = require('http')  
// // const url = require('url') 

// let users = [
//     {
//         id:1,
//         username:'INTECBRUSSEL'
//     },
//     {
//         id:2,
//         username:'STUDENT'
//     },
    
// ]

// http.createServer((request,response)=>{
//     response.end('Welcome to user dashboard')
//     console.log(request.url);
//     if(request.url === '/admin') {
//         response.write(`WELCOME ${users[0].username}\n`)
//     }
//     else if (request.url === '/user') {
//         response.write(`WELCOME ${users[1].username}\n`)
//     }

//     response.end('homepage')


// //   let result = url.parse(`http://localhost:3000${request.url}`)
// //   console.log(result);

// }).listen(3000,()=>{
//     console.log('Server is running....');
// })

const http = require('http');

let users = [ 
    {
        id:1,
        username:'Intecbrussel'
    },
    {
        id:2,
        username:'Student'
    }
]
// http.createServer((request,response)=>{
//     response.end('Welcome')
// })
function callBackServer(request,response){
    
    console.log(request.url);
    if(request.url === '/admin'){
        response.write(`WELCOME ${users[0].username}\n `)
    } 
    else if(request.url === '/user'){
            response.write(`WELCOME ${users[1].username}\n`)
        }
    
    response.end('HOMEPAGE')
}

http.createServer(callBackServer)
.listen(3000,()=>{
    console.log('Server is running...');
})



