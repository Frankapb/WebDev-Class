const get = require('./modules/getUsers');
const exportData = require('./modules/dataExport');

console.log(`
───────────────▄▄───▐█
───▄▄▄───▄██▄──█▀───█─▄
─▄██▀█▌─██▄▄──▐█▀▄─▐█▀
▐█▀▀▌───▄▀▌─▌─█─▌──▌─▌
▌▀▄─▐──▀▄─▐▄─▐▄▐▄─▐▄─▐▄
[OPTIONS]\n--get\n--get --export EnteryourFileName.json`)

if (process.argv[2] === '--get' && process.argv[3] === undefined) {
    console.log(true)
    get().then(res => console.log(res))
} else if (process.argv[2] === '--get' && process.argv[3] === '--export') {
    console.log('user try to save this data.....')
    get().then(res=>exportData(process.argv[4],res))
}







// get()
// .then(response=>{
//     exportData('test.json',response)
// })