//Use of this keyword
const user = {
    fname : "Hariom",
    Lname : "Singh",
    id : 2,
    welcomeMessage : function(){
        console.log(`welcome ${this.fname} to the company and your ID will be ${this.id}.`);
        console.log(this);
    }
}
user.welcomeMessage();// welcome Hariom to the company and your ID will be 2.
user.fname = "Dev";
user.id = 7;
user.welcomeMessage();// welcome Dev to the company and your ID will be 7.

//Empty Object
console.log(this) // {}

//Use this in a function
function printThis(){
    console.log(this);
}
printThis();// you will given many values


function print(){
    const name = "Hariom Singh"
    console.log(this.name);
}
print();// o/p will be =>  undefined

/*                    Arrow Functions          */ 

//Syntax->    ()=>

//example 1
const add = (n1,n2)=>{
    return n1+n2
}
console.log(add(6,6));// o/p=> 12

//example 2

const printname = ()=>{
    const name = "Hariom"
    // console.log(this)
    console.log(name)
}
printname()// o/p=>  Hariom

//example 3 => implicit return where {} are not used
const sum = (num1,num2)=>num1+num2;
console.log(sum(1,2))// o/p=> 3

//you can wrap in () the code
const sumTwo = (num1,num2)=>(num1+num2);
console.log(sumTwo(1,2))// o/p => 3

// Return an object
const nameprint =(r1,r2)=>({
    name:"Hariom Singh"
})
console.log(nameprint(2,5))// o/p=>   { name: 'Hariom Singh' }

//simple syntax = >       ()=>()