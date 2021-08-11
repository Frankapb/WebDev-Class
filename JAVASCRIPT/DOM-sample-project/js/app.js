// window object
let result;

// let tools = {// clone of window
// x:function(str){
//     this.alert(str)
//     }
// }

// tools.x('intecbrussel')

window.intecbrussel=function(str){
    alert(str);
}

result = window 

result = window.outerWidth
result = window.outerHeight

// window.addEventListener('resize',function(){
//     console.log(window.outerWidth);
//     console.log(window.outerHeight);
// })

result = window.document
result = document;
//result = document.write('hello')
result = document.all // return all HTML elements in the document 
result = document.all.length // return NUMBER OF ELEMENTS USED IN THE HTML DOCUMENT = 62 
result = document.head // return only the HEAD of the document
result = document.body // return only the body of the document
result = document.location // return the host and link you`re in  or reading = github.com and https://
result = document.scripts // return all the scripts TAGS used in the HTML collection = 5 SCRIPTS 
result = document.links[0] // return all the links in HTML
result = document.links[0].className // = navbar-brand
result = document.links[0].getAttribute('href') // = #


//forms
result = document.forms
result = document.forms.length // = 2
result = document.forms[1]
//const [searchForm,myContactForm] = document.forms
result = document.forms[1].id // return  = add
result = document.forms[1].method // return = get


//select elements using dom methods
/* 
getelementbyid
getelementbyclassname
getelementbytagname
queryselector
queryselectorall

*/

result = document.getElementById("add") 
result = document.getElementById('password')


//getElementByClassName
result = document.getElementsByClassName("form-group");
result = document.getElementsByClassName('btn')


//GetElementByTagName

result = document.getElementsByTagName('input')
result = document.getElementsByTagName('p')


//QUERY SELECTOR

result = document.querySelector(".display-3")  // return <h1 class="display-3">INTECBRUSSEL</h1>
result =document.querySelector('#redBtn')
result = document.querySelector('button') // return the first button


// QUERY SELECTOR ALL

result = document.querySelectorAll('button')  // find elements by tagnames
//result = document.querySelectorAll('.form-group') 

let formGroup = document.querySelectorAll('.form-group')

// formGroup.forEach(el=>{
//     el.innerHTML="HELLO HELLO DOM MANIPULATION"  // substitute all FORMS in document

// })
//result.forEach

let buttons = document.querySelectorAll('button')
console.log(buttons);

for (btn of buttons){
    btn.innerHTML="test button" // return all buttons names changed "test button"
}


let allText = document.querySelectorAll('.card-title')

allText.forEach(text=>text.innerHTML="hello world") // return change of '.card-title' text to "hello world"

allText.forEach(text=> {
    text.addEventListener('click',(e)=>{
        alert('hello friend!') // return when clicking on "hello world" card it will show a pop up whit "hello friend!"" display
    })
})





console.log(result);

