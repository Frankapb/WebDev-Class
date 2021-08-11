// CHILD NODES 

const containers = document.querySelectorAll('div')[1].childNodes[1].childNodes[9]
console.log(containers);

containers.textContent="test"
containers.setAtrinutte('test',256255)


// DOM METHODS

const listGroup = document.getElementById('myList');

console.log(listGroup);

const getElByClass = document.getElementsByClassName('list-group-item')

console.log(getElByClass[3]);

const getElByTagName = document.getElementsByTagName('li');
console.log(getElByTagName)[0];

getElByTagName[0].setAttribute('company','intecbrussel')
console.log(getElByTagName)[0].getAttribute('company');

document.body.style.backgroundColor='black'
document.body.classList.add('bg-dark')

const h1= document.createElement