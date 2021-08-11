/* if - if eslse - if eslse if - switch */
function GenNumbers(min,max){
    let number = Math.floor(Math.random()*((max-min)+1)+min)
    console.log("Random Number" ,number);
    return number;
}

// if 

for (let i=0;i<10;i++) {
    let number = GenNumbers(0,3);
    //if begin
    if(number == 2) {
        console.log("FOUND =>",number);
        break;
    }else{
        console.log("NOT FOUND")
    }
}

// SWITCH

switch(9){
    case 1: 
    console.log('found! it is number 1')
    break;
    case 9: 
    console.log('yes! it is number 9')
    break;
    case 10: 
    console.log('found! it is number 10')
}