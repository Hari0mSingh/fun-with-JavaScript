//objects Declaration two types => object singletob and object literal

//this is Object literal
const userData = {
    name: "Hariom",
    "Full Name":"Hariom Singh",
    gmail:"hariom@google.com",
    isLoggedOn: false,
    workingDay:["Monday","Friday"],
    workinghours:10
    // [sym]="key2"
}
console.log(userData)

//Acces a key-value pair using dot op.
console.log(userData.name)

//modify a key-value in objects
userData.name = "Jai Shree Ram"
console.log(userData)

//but can also freez the modification in the object so no one can modify it
Object.freeze(userData)//Now no one can able to modify this object


//another methos to access
console.log(userData["Full Name"]);

//Create a Symbol and use it in objects
const sym = Symbol("Key1");
// console.log(typeof sym)

//Use the referenec of a symbol in objects
const JSuser = {
    [sym]: "Key",
    Name: "Hariom singh"
}
//acces object Symbol
console.log(JSuser[sym])

//Declare a function as a object in objects 
JSuser.greeting = function(){
    console.log("Hello Js users  how are you.")
}

//access a function of objects
console.log(JSuser.greeting)// o/p => [Function (anonymous)]
JSuser.greeting()// o/p => Hello Js users  how are you.

//object reference in a function
JSuser.greetingtwo = function(){
    console.log(`Hello js user ${this.Name} how are you.`)
}
//Access this function
JSuser.greetingtwo();

