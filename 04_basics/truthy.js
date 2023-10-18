//Somethime assume that some valuses are true known as truthy values 
//Somethime assume that some valuses are false known as falsy values 

//falsy values => false,0,-0,BIGNITOn , "" , null , undefined , NaN

//Truthy values => "0","False", " " , [] , {} , function(){}

//Examples of falsy value
const marks = false
if(marks){
    console.log("Fail")//this code will not be executed
}

//what if

if(marks==0){
    console.log("Fail")//Now this code will execute 
}

//Some false value change to true values like=> false==0 , false=="" , 0==" " <= thay will treated as true values
                                         

const score = "0";
if(score){
    console.log("You are passed")// this code will be executed.
}
//To check the array is empty
const Name = [];
if (Name.length === 0) {
    console.log("Array is empty");
}
//To check the Object is empty
const obj = {};
if(Object.keys(obj).length===0){
    console.log("Object is empty.")
}

//Nullish Coalescing Operator(??) => Null ,undefined
//Examples
let val1;
val1 = 5??10
console.log(val1)// o/p => 5
let val2;
val2 = null??10
console.log(val2)// o/p => 10
let val3;
val3 = undefined??10
console.log(val3)// o/p => 10
let val4;
val4 = 2??null;
console.log(val4)// o/p => 2

//Terniary op. =>  (condition) ? true : false

//example
const mathMarks = 89;
mathMarks>=80 ? console.log("Passed") : console.log("Fail")
