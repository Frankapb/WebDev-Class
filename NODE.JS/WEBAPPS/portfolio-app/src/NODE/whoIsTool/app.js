const whois = require('whois')
const yargs = require('yargs')
// whois('intecbrussel.be', function(err,data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log();
//     }
// })

const options = yargs
.usage('Usage: --dns <intecbrussel.be>')
.option('dns',{alias:'dns', describe:'whoisdns',type:'string', demandOption:true})
.argv

console.log(process.argv);

// whois.lookup('intecbrussel.be',function(err,data){
//     console.log(data);
// })