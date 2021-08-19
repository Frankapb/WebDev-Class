const fs = require('fs');
const { stringify } = require('querystring');

function saveData(){
    fs.writeFile('fileNAme',JSON>stringify(data),function(err){
        if(err){
            console.log(err);
        }else{
            console.log('EXPORTED DATA TO LOCAL COMPUTER');
        }
    })
}

module.exports = saveData