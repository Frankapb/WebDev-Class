let person

let name = {firstName:"Alexander", 
lastName:"Jones",
age:"37",
};

let location = {city:"Dublín",
country : "Ireland",
post: "D16",
street: "Flowerhills",
apt : "5",
};

let contact = {
phone: "+1234567890"
}

let mail= {
email:"alexander@mail.com"
}

let about = {
cv : "Curriculum Vitae"

}

let info = {
date: "15-03-1984"
}

let education = ['2001','2002','2003','2004']//array
education[4]='Master of Science in Accounting and Finance'







console.log(name.firstName, name.lastName);
console.log(location.street,location.apt);
console.log(location.post,location.city);
console.log(location.country);
console.log(contact.phone);
console.log("This is my email "+ mail.email);
console.log(about.cv);
console.log("I was born "+ info.date + " in Dublin,Ireland");
console.log(typeof education);