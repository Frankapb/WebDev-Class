// DELETE ALL RECORDS
let deleteAllButton = document.querySelector('.btn-primary');

deleteAllButton.addEventListener('click',function(){
    document.querySelector('tbody').remove()
});


// TRASH ICON
const trashIcons = document.getElementsByClassName('fa-trash');
for (i=0;i<trashIcons.length;i++) {
    trashIcons[i].addEventListener('click',function(event){
document.querySelector('table').deleteRow(event.target.parentNode.parentNode.parentNode.rowIndex);
    });
}






// // let listOfTodos = document.querySelectorAll('tr')


// // $(document).on('click','.btn',function(){
// //     $(todoTable).empty()
// //     newMsg('All records have been cleared')
// // })

// // function myBtn(){
// //     var list = document.getElementsByTagName("TBODY")[0];
// //     list.getElementsByTagName("TR")[0].remove
// // }


// // function myBtn(){

// // }

// const myBtn = document.querySelector('.btn-primary')
// const documentBody = document.querySelector('body')
// const Table = document.querySelector('.table')
// const secondRow = document.querySelectorAll('.row')[1]
// const listOfRecords = document.querySelectorAll('tr')


// secondRow.addEventListener('click',RemoveRecord)


// function RemoveRecord(event){
// event.preventDefault();
// if(event.target.className == "btn-primary") {
//     console.log('this is all clear button');
//     secondRow.innerHTML=""
// }
//     if(event.target.className == "fa fa-trash") {
//         console.log(event.target.parentElement.parentElement);
//         event.target.parentElement.parentElement.remove();
//     }
// }


/*
const deleteAllButton = document.getElementById("delete_all");

deleteAllButton.addEventListener('click',function(){
    document.querySelector("#table_body").remove()
})

*/




// let deleteNumber1 = document.querySelector('.fa-trash');
// $(document).on('click','.fa-trash',function(){
//     $(this.parentElement.parentElement.parentElement.parentElement).remove()

// })



