/*
Datatypes => premimitiv & Non-premitive 
premitive => Number ,string ,boolean, Null ,undefined ,symbol , BigINT
Non-premitive => Array , Functions , Objects
*/

//Examples Premitive/call by value

const marks = 10;//Numbber
const score = 10.8;//Numbber

const A = true;//Boolean
const temp = null;//Null type
const Name = undefined;//Undefined type

let Sname;//It is also undefined

let FName = "hariom";//String

let fullName = Symbol("Hariom");//symbol
let FullName = Symbol("Hariom");//Symbol 

let Bignumber = 55678908786654342456n;//bigINT

//Examples of Non-premitive/call by reference

const Names = ["Hariom", "Dev", "Shiv"];//Array
console.log(typeof Names);

const myBIO = {          //Object
    name: "Hariom",
    Age: 20,
    City: "Sonipat"
}


const myFunction = function(){
    console.log("Hello World");
}

