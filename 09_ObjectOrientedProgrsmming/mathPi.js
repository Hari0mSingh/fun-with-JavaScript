//Math 
console.log(Math.PI)

//Is PI value is changable ?  ==>>  NO
const descriptor = Object.getOwnPropertyDescriptor(Math,'PI') 
console.log(descriptor)

//Another mathod to create a  object
const myNewObject = Object.create(null)
console.log(myNewObject)

//create a object
const chai = {
    name : 'ginger chai',
    price : 290,
    isAvailable : true,
    orderChai : function(){
        console.log('chai nhi bni')
    }
}

//get description of properties
console.log(Object.getOwnPropertyDescriptor(chai,'name'))

//change the properties
Object.defineProperty(chai,'name',{
    // writable : false,
    enumerable : false
})
// console.log(Object.getOwnPropertyDescriptor(chai,'name'))

//looping
for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}