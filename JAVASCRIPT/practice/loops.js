// for loop

var total = 0;
for (var num=0; num<=11; num++) {
    console.log(num);
    total = total + num
}

console.log("the total is:"+ total);

var fruits = ["mango","banana","apple","cherry","coconut"];

for (var i=0; i<fruits.length; i++) {
    console.log(fruits[i])
}

var data = {
    name:"jhon",
    age:28,
    maritalStatus: true
}
console.log(data.maritalStatus)

for  (var elem in data) {
    console.log(elem,data[elem])
}


// numbers
let numbers = [1,2,3,4,5,6,7,78,89,9,90,0];

for (var numb=1; numb<numbers.length; numb++) {
    console.log(numbers)
    console.log(numbers.slice(0,-1))
   }
   

   //let numbers = [1,2,3,4,5,6,7,8,9,10];

   for (var i=0; i<=1000; i+=100) {
       console.log(i) //output 1
   }

   for (var b=1; b<=128; b*=2) {
       console.log(b) //output 2
   }

   for (var c=0; c<=10; c+=2) {
       console.log(c) //output 3
   }
   for (var d=3; d<=15; d+=3) {
    console.log(d) //output 4
}  

for (var e=9; e<=0; e--) {
    console.log(e) //output 5
}

 var arr = [0,1,2,3,4,5,6,7,8,9,10];
 for (let z = 0; z<arr.length; z++) {
     console.log(arr[z])
 }

 //for (var z=0; z<=1000; z++) {
  //   console.log(z)
 //}

 //
 var students =[0,1,2,3,4,5,6,7,8,9,10];
 console.log(students.map(elem => elem * 100));

//
 var students = [0,1,2,3,4,5,6,7,8,9,10];
 console.log(students.map(elem => elem * 2))
 
 //
 var students = [0,1,2,3,4,5,6,7];
 for(let n of students){
    let x=  Math.pow(2,n)
    console.log(x)
}

for (var num = 10; num >= 0; num--) {
console.log(num)
}

// while loop
var sum = 0; // store the addition of sum // final value // 1+2+3+4+5+6+7+8+9 = 45

var num = 0;

while (num < 10) {
    sum += num;
    num++;
}
console.log(sum);

//
//var randomStuff = ["apple",3.21415, 9999, true, false, undefined, ['apple','ball','cat'], 3, 2,'lastobject'];

//var x = 0;  while (x < randomStuff.length) {
    // console.log(randomStuff[])
// }





