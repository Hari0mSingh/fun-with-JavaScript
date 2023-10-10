//******************Memory In JavaScript********************

//Stack => primitive datatype
//Heap => Non primitive datatype

let name = "hariom";
let anotherName = name;
anotherName = "shivom";

// console.log(name);
// console.log(anotherName);

let userOne = {
    Name:"Hariom",
    Age:20
}

let userTwo = userOne;

userTwo.Name = "Jai shree Ram";

console.log(userOne);
console.log(userTwo);
//The output will be updated of both names in userOne and userTwo