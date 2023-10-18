//IIFE Syntax  ()()

//what is IIFE=> when global scope pollute the function code an d also want to execute the function code immediately

//Example
(function print(){
    console.log("DB connected")
})();// o/p=>  DB connected

//Example with Arrow function
(()=>{
    console.log("DB connected")
})();// o/p=>  DB connected

//Note : if you are using two IIFE then you have to end the 1st IIFE with (;) and then start writing the 2nd IIFE

const name = "Hariom";
(()=>{
    console.log(`DB connected ${name}`)
})(); // o/p = >   DB connected Hariom



