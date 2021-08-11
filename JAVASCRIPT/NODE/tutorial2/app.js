// const anyName = require('http');  //  load a core module
// const anyName = require('fs')   //  file system

const http = require('http')  // loaded core module
const url = require('url')  // loaded url core module 

http.createServer((request,response)=>{
    response.end('hello node.js')
    // console.log(request.url);
  let result = url.parse(`http://localhost:5000${request.url}`)
  console.log(result);
  console.log(result.query);
}).listen(5000,()=>{
    console.log('Server is running....');
})

