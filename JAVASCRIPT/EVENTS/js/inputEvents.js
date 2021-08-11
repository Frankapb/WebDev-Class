const title = document.querySelector('#title')

const cardColumns = document.querySelector('.card-columns').firstElementChild

const alertMessage = document.querySelector('.alert')
/*

DOMContentLoaded
Focus
Blur
Paste
Copy
Cut
Select
Input

*/


let users = [{
    id:1,
    user:'root',
    pass:'root123'
},
{
    id:2,
    user:'root2',
    pass:'root123456'
}]


// DOMContentLoaded
function LoadUsers() {
    console.log(users);
}

document.addEventListener('DOMContentLoaded', () => console.log('hello'))
document.addEventListener('DOMContentLoaded', LoadUsers)


// focus event

title.addEventListener('focus',function(e) {
    console.log('hello');
    console.log(e.target);
    e.target.classList.add('bg-dark')
    e.target.classList.add('text-warning')
   })

   // blur  event

   title.addEventListener('blur', function(event){
       console.log('this is a blur event');
       event.target.classList.remove('bg-dark')
       event.target.classList.remove('text-warning')
       event.target.classList.add('bg-success')
       event.target.classList.add('text-light')

 }) 

 // select event
title.addEventListener('select', function(event){
    console.log('this is select action selected'); // action happens after selecting and releasing mouse click
    console.log(event.target.value);
    console.log(cardColumns);
    cardColumns.childNodes[3].childNodes[3].textContent=event.target.value //display input data in card-body
})


// copy event
title.addEventListener('copy', function(e){
    console.log('copied data');
    alertMessage.style.display="block"
    setTimeout(function(){
        alertMessage.style.display="none"
    },2000) // setTimeout (function) makes the message fade off after 2 seconds
    
})

console.log(alertMessage);


// paste event
title.addEventListener('paste', function(e){
    console.log("input data pasted");
}) 


// cut event 
title.addEventListener('cut', function(e){
    console.log('cut event!!!');
})



// input event
title.addEventListener('input', function(e){
    console.log('user is writing something...');

})



/*  Possible to unlock websites that doesn`t allow user to copy or cut documents from their website


Array.from(document.all).forEach(el=>{
    el.onselectstar=null
    el.oncontexmenu=null
    document.oncontextmenu=null
})

*/