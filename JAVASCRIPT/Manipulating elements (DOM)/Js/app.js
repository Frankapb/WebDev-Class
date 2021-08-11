const cardColumns = document.querySelector('.card-columns')
console.log(cardColumns);
let h1 = document.createElement('h1')
h1.textContent="INTECBRUSSEL"
console.log(h1);

// insertBefore();

cardColumns.insertBefore(h1,cardColumns.childNodes[4])
console.log(cardColumns.childNodes);

//append()
let bigFontSize = document.createElement('h1')
bigFontSize.innerText="INTECTV1"
cardColumns.append(bigFontSize)
cardComumns.append("<h1>xxxxxxxxxxx</h1>")





//prepend
// let IAMTHEFIRSTCHILD = document.createElement('h1')
// IAMTHEFIRSTCHILD.innerText="I AM THE FIRST CHILD"
// cardColumns.prepend(IAMTHEFIRSTCHILD)

// let IAMTHEFIRSTCHILD1 = document.createElement('h1')
// IAMTHEFIRSTCHILD1.innerText="I AM THE FIRST CHILD11111xx"
// cardColumns.prepend(IAMTHEFIRSTCHILD1)

// insertAdjacentHTML
// cardColumns.insertAdjacentHTML('afterbegin',"<h3>WEBDEVCLASS</h3>")
// cardColumns.insertAdjacentHTML('afterend','<h3>We are developer </h3>')
// cardColumns.insertAdjacentHTML('beforebegin',"<h4>Fullstack1</h4>")
// cardColumns.insertAdjacentHTML('beforeend',"<h4>Fullstack2</h4>")

// cloneNode
let CardTemplate  = cardColumns.firstElementChild.cloneNode(true);
CardTemplate.childNodes[3].childNodes[1].textContent="INTECBRUSSEL 2021"
console.log(CardTemplate)

// replaceChild
setTimeout(()=>cardColumns.replaceChild(CardTemplate,cardColumns.childNodes[9]),3000)

// removeChild
cardColumns.removeChild(cardColumns.firstElementChild)