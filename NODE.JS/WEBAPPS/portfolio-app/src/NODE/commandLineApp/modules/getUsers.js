// https://jsonplaceholder.typicode.com/users
const fetch = require('node-fetch')

async function getUsers(){
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = res.json();
    return data;
}

module.exports = getUsers