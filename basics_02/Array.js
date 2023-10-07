//Arrya declaration
let myArr = [1,2,3,4,'Hariom','Rocky',5,6];
let Arr1 = new Array('Hariom','Rocky',4,5,'Monty',true);
// console.log(myArr);
// console.log(Arr1);

//length of array
console.log(myArr.length);

//Array methods 
const newArr = [1,2,4,6,8,76,5,43];
//Array into localestring
console.log(newArr.toLocaleString()) // o/p => 1,2,4,6,8,76,5,43


//push
newArr.push(9)
console.log(newArr);

//pop
newArr.pop()
console.log(newArr);

//insert element at 1st position using unshift
newArr.unshift(22);
console.log(newArr)

//Delete element at 1st position using shift
newArr.shift(22);
console.log(newArr)

newArr.shift();
console.log(newArr)

//true false methods
//includes
console.log(newArr.includes('hariom'));

//indexof
console.log(newArr.indexOf(43));
console.log(newArr.toLocaleString())

console.log(newArr.includes('H'));//False

console.log(newArr.includes(99));//False

//Array to string
const newArr1 = newArr.join();
console.log(typeof newArr1);//String
console.log(newArr1)// i/o=> 2,4,6,8,76,5,43

//Use of Slice
console.log("A ",newArr)
console.log(newArr.slice(2,5))

//Use of splice
console.log("B ",newArr)
console.log(newArr.splice(2,5))

//Array after Splice
console.log("Array After splice", newArr);//splice will cut that portion form the Array that you asked for

//Arrays in the Array
const Array1 = [1,2,3,5,6,[5,78,0,[1,24,8,9],7],6,3]
//change this arrays in array in one single Array
console.log(Array1.flat(Infinity));

//concatenate Arrays
const arr2 = myArr.concat(Arr1);
console.log(arr2)

//isArray
console.log(Array.isArray('hariom'))//  false

//create a Array from given string as a parameter
console.log(Array.from("hariom"))//   [ 'h', 'a', 'r', 'i', 'o', 'm' ]

//Passed Objects to convert into an Array
console.log(Array.from({Name:"Hariom"}));// o/p=> []  ,not converted into Array it dosnt not to make a array of Keys or Values

//Make Arrays from many variables
const score = "100"
const Name = "Haiom Singh";
const Marks = "1099";

console.log(Array.of(score,Name,Marks))// [ '100', 'Haiom Singh', '1099' ]
