const express = require('express');
const app = express();

const test = {
    name:"Harry Potter",
    review:"Nice",
}

app.get('/', (req, res)=>{
    res.header('Access-Control-Allow-Origin', "*")
    res.send(test)
})

app.listen(3001, () => {
    console.log("running on port 3001");
});

