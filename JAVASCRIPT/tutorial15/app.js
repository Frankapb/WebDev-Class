// Function scope

// local scope
let username;
/*
function addUser(){
 username = "joe dalton"
    
}
*/

// scenerio 1
/*
function addUser(){
 let username = "joe dalton"
    
}
*/

// addUser()
// console.log(username)


// global scope

let fullname = "Michael Jackson"

function addArtist() { // scope
    console.log(fullname)
} // end of scope

addArtist();

//

// const secret_token;

// function generateUserToken(){
//     secret_token = "3343434343434343434"
// }

// console.log(secret_token);
// generateUserToken();


// Arrow Function

// simple arrow function
//()=>5

// arrow function with params
// let getName = (name)=>name
// console.log(getName('intecbrussel'))

// let getUser = name => name
// console.log(getUser('r00t'))

// let getData = data => {
//     console.log(`Here is your data ${data}`)
// }

// getData('facebook, twitter')

// let personData = (username,password)=>{
//     console.log(`Username is ${username}\nPassword is ${password}`)
// }

// personData('R00t','123456')


(
    () => {
        console.log('intecbrussel') // arrow function
        var a = 1
        var b = a // 1
        var c = a+b // 1+1 = 2
        console.log(c) // 2
    }
    
) // anonym func itself
() // callback anonym function
