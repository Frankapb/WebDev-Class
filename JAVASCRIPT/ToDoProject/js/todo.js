const TodoInput = document.querySelector('#todo')
const firstCardBody = document.querySelectorAll('.card-body')[0]
const secondCardBody = document.querySelectorAll('.card-body')[1]
const ListGroup = document.querySelector('.list-group')

// event listeners
firstCardBody.addEventListener('click', AddTodo)
secondCardBody.addEventListener('click',RemoveTodo)



function deleteItem(){

    document.querySelector('.list-group-item').remove();

}


function RemoveTodo(event){
    event.preventDefault();
    if(event.target.id == "clear-todos"){
        console.log('this is all clear todos button')
        ListGroup.innerHTML=""
    }

    if(event.target.className=="fa fa-remove"){
        console.log(event.target.parentElement.parentElement) // remove()
        event.target.parentElement.parentElement.remove();
    }
}


const generator = t => document.createElement(t)

const MakeTodo = (title) => {
    let li = generator('li')
    li.className = "list-group-item d-flex justify-content-between"
    let todoTitle = document.createTextNode(title)
    li.appendChild(todoTitle)

    let a = generator('a')
    a.href="#"
    a.className = "delete-item"

    let i = generator('i')
    i.className = "fa fa-remove"

    a.appendChild(i)
    li.appendChild(a)

    return li

}



function AddTodo(event) {
    event.preventDefault();
    //console.log('hello add todo')
    // console.log(event.target.className)
    if (event.target.className == "btn btn-danger") {
  //      console.log('add todo click click')
      //  console.log(TodoInput.value)
     //   console.log(MakeTodo('this is a new todo'));
        ListGroup.appendChild(MakeTodo(TodoInput.value))
    }
}

//console.log(TodoInput.value, firstCardBody);


// const myFunction = (a,b)=>{

// }

// const myFunction = a =>{

// }

// const myFunction = a => console.log(a)

let datepicker = new tui.DatePicker('#wrapper',{
    date: new Date(),
    input:{
    element:'#datepicker-input',
    format:'yyyy-MM-dd'
    }
    });

    // function bootstrapAlert() {
        
    //     var info = 'My todo title'; 
    //     var todoInfo = document.getElementById('todo').value;
        
    //     if (info == todoInfo ) {
    //         swal("Good job!","Success");
    //     } 
    //     else {
    //         sweetAlert("Oops....","Something went wrong!")
    //     }
    
    // }

    // var notification = new Notification("hi there", {body:"some text"});
    // setTimeout(function() {notification.close()}, 1000);

    // window.setTimeout(function() {
    //     $(".alert").fadeOut(500,0).slideUp(500, function(){
    //         $(this).remove();
    //     });
    // },2000);

    // function myFunction() {
    //     // get the 
    //     var x = document.getElementById("alert");

    //     x.className = "show";

    //     setTimeout(function(){ x.className.replace("show",""); }, 3000);
    // }

    // document.getElementById("filter").onkeyup = function() {myFunction()};
    // function myFunction() {
    //     var x = document.getElementsById("filter");
    //     x.value = x.value.toUpperCase();
    // }

    function keydownFunction() {
        document.getElementById("filter").style.backgroundColor = "yellow";
      }
      
      function keyupFunction() {
        document.getElementById("filter").style.backgroundColor = "lightgreen";
       
    }
   
    function keydownFunction() {
        var x = document.getElementById("filter");
        x.value = x.value.toUpperCase();
    }