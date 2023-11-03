// const myName = "Hariom      ";
// const myChannel = "CS     ";
// Task is to create a method to remove the spaces from the string and give the true string


let myHeros = ['superman','thor'];

let heroPower = {
    thor:'hammer',
    superman:'fly',
    getSupermanPower : function(){
        console.log(`Superman power is  ${this.superman}`);
    }
}

Object.prototype.Hariom = function(){
    console.log('Hariom presented in all objects.')//we declared a prototype Hariom in all objects
}

heroPower.Hariom()// Hariom presented in all objects.

myHeros.Hariom()//  Hariom presented in all objects.

//define a prototype only for arrays
Array.prototype.sayHello = function(){
    console.log('Hello Hariom')
}
//A array can access this prototype, any other like string , object cannot access this prototype

myHeros.sayHello()// Hello Hariom

//if object want to access this sayHello prototype
// heroPower.sayHello()// heroPower.sayHello is not a function

//inheritence
const user = {
    name : 'Hariom',
    email: 'xyz@email.com'
}
const Teacher = {
    makeVideo : true,
}
const TeachingSupport = {
    isAvailable : false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = user;
//NOW our removing extra space task from a string
let anotherUserName = "Hariom    ";
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is : ${this.trim().length}`)
}
anotherUserName.trueLength()

"JaiShreeRam".trueLength()
'DEV '.trueLength()