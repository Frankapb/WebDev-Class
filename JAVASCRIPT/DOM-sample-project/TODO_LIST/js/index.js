// NAVIGATION IN DOM TREE

// let result;
// const CardBody = document.querySelectorAll('.card-body')[1]
//  result = CardBody.children[4]
//  result = CardBody.children[4].children
//  result = CardBody.children[4].children[0]
// CardBody.children[4].children[0].innerHTML = "intecbrussel";


// //************************** */

// const findme = document.querySelector('.findme')

// result findme
// result findme.parentElement


//*********************************** */
//  let result;
//  const button = document.querySelector('.btn')
//  result = document.querySelector('.btn-dark')


// //result = document.getElementById("clear-todos").object.textElement





// console.log(result);




document.querySelector('#clear-todos').onsubmit = function() {
    if (document.querySelector('#clear-todos').value == '') {
        document.querySelector('#clear-todos').style.backgroundColor = 'blue';
        return false;
    }
}

document.querySelector('#clear-todos').onfocus = function() {
    document.querySelector('#clear-todos').style.backgroundColor = 'blue';
}

//*************************************** */

let NewBtnName = document.querySelectorAll('a')
console.log(NewBtnName);

for (btn of NewBtnName){
    btn.innerHTML="This is my new name" 
}


// function function1() {
//     var ul = document.getElementsByClassName("list-group");
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode("9"));
//     li.setAttribute("class, list-group-item" ); // added line
//     ul.appendChild(li);
//         alert(li.class);
//   }

// addAnother = function() {
//     var ul = document.getElementById("list");
//     var li = document.createElement("li");
//     var children = ul.children.length + 1
//     li.setAttribute("class", "element"+children)
//     li.appendChild(document.createTextNode("Element "+children));
//     ul.appendChild(li)
// }
// return = li;

// newList = result;

// console.log(result);