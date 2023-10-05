
//+++++++++++++++Number+++++++++++

const marks = 100//number declaration
const score = new Number(100)//number declaration

//Number prototyes

//Number to string 
console.log(marks.toString());
console.log(typeof marks);

//find length after converting number into string
console.log(score.toString().length);

//declare percision
const count = 1200;
console.log(count.toFixed(2));//1200.00

//find percision value
const numOne = 12.78;
console.log(numOne.toPrecision(2));//output => 13

//find percision value
const numTwo = 12.78;
console.log(numTwo.toPrecision(3));//output => 12.8

//find percision value
const numThree = 12.78986;
console.log(numThree.toPrecision(5));// output => 12.790
console.log(numThree.toPrecision(1));// output => 1e+1

//locale string
const rupee= 100000;
console.log(rupee.toLocaleString());//o/p =>1,00,00,00,00,00,000  //set commas to US starndard


////locale string with Indian Standard
const rupees= 100000;
console.log(rupees.toLocaleString('en-IN'));


//++++++++++++++++++++++Math++++++++++++++++++++++++++

console.log(Math);//Math library in JS

//abs
console.log(Math.abs(-6));//give absolute value

//round
console.log(Math.round(6.6))// o/p => 7

//ceil
console.log(Math.ceil(4.2))// o/p=> 5

//floor
console.log(Math.floor(8.7));// o/p => 8

//Math.random
console.log(Math.random());//Random range (0-1)

//to get a number out of random
console.log((Math.random()*10)+1);

//avoid decimal value
console.log(Math.floor(Math.random()*10)+1);//Create 1 to 10 range

//create a range 10-20
const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1))+min);


