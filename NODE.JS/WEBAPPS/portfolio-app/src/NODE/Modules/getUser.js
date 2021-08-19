const fetch = require('node-fetch');  // importing (npm i node-fetch) from localModules 

module.exports = ()=>{
    let res = await fetch ("https://jasonplaceholder.typicode.com/users")
    let data = res.json();
    return data 
}