//Global and Block Scope
// scope ==> {}

if(true){
    var n1 = 10;
const n2 = 20;
let n3 = 30;
n4 = 40;

}
// console.log(n1);//  will run and give 10 thats why we avoid to use 'var'
// console.log(n2);//   n2 is not defined
// console.log(n3);//   n3 is not defined
// console.log(n4); //will run and give 40 thats why we avoid to create a variable without let and const

const num1 =10;
if(true){
    const num2 = 20;
    console.log(num1+num2);//Here we can access the Global variable num1
}

// console.log(num2)// will give error like this = > num2 is not defined

/*  Global scope variables can be accessed by the block variables but, block varable are only available in the block only */

let number = 100;
if(true){
    const number = 45;
    console.log("Inner nmber : ",number);
}
console.log("Outer number : ", number);
//o/p = > Inner nmber :  45
//        Outer number :  100

//only use let and const for creating a variable 

/*  Nosted Scope */

// nested scope in functions

function one(){
    const fname = "Hariom";
    const id  = 44;
    function two(){
        const Lname = "Singh";
        console.log(`The first name is ${fname} and the last name is ${Lname}.`)// accessed the function one variable
        const website = "hariom.com"
    }
    two();

    // console.log(website);// error = >  website is not defined
}
one();


// Nested scope in if-else statement
const a = 10;
if(true){
    const b = 10 + a;
    if(true){
        const c = 10 + a + b;
        console.log(c);// o/p => 40  
    }
}


