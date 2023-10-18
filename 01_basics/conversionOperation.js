let score = "45";

console.log(typeof score);//string
// console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof(valueInNumber))//type->number
console.log(valueInNumber);

let marks = "45di";
console.log(typeof(marks))
let a = Number(marks)
console.log(typeof(a))
console.log(a);//is will print Nan type 

let math = null;
console.log(typeof(math))//Object
console.log(math)

let b = true
console.log(b)

let c = undefined
console.log(typeof(c))//undefined
console.log(c)


/*Conversion Notes
1. "45" => 45
2. "45abc" => Nan - Not a number
3. true => 1, false => 0
4. */

let isLoggedIn = 1;
console.log(typeof (isLoggedIn))//Number 
console.log(isLoggedIn)//Print 1
let isLogged = Boolean(isLoggedIn);//Converting to Boolean 
console.log(typeof (isLogged))
console.log(isLogged)//Print True


let empty = "";
console.log(empty)
console.log(typeof (empty))//tyep -> string

let fill = Boolean(empty);
console.log(fill)
console.log(typeof (fill))