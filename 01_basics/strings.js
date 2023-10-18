const Name =  "hariom";
const repoCount = 10;

// console.log(Name+repoCount+ "Singh");

console.log(`Hello my Name is ${Name} and my repoCount is ${repoCount}`);

const gameName = new String("Hariom Singh");

console.log(gameName[3]);//will print i

console.log(gameName.__proto__);


/*
String Methods or Prototypes
*/
//length of string
const Fname = "Hariom";
console.log(Fname.length);

//access individual character using index
console.log(Fname.charAt(5));

//All charcter will be Set to upper case
Fname.toUpperCase;
console.log(Fname)


//To make a  sub-string by giving index range
const newName = Fname.substring(4,6);
console.log(newName);

//To know character index in the string
console.log(Fname.indexOf('o'));


//slicing 
console.log(Fname.slice(0,4));
console.log(Fname.slice(-6,-5));//Can pass -ve index

//Trim the spaces
const fullName = "    Hariom Singh   ";//will remove starting and ending space
console.log(fullName.trim());

//put something else in URL instead  of space using Replace function
const url = "https://www.google.com/hariom%20singh";

console.log(url.replace('%20','-'));


//To search something in url
console.log(url.includes('Hariom'));//will return false
console.log(url.includes('hariom'));//will retur true

//Convert String into Array based on your condition like spaces,desh etc
const lastname= "singh-thakur";
console.log(lastname.split('-'));

//concatenate strings
const company = "OmSec";
const Owner = "Hariom Singh";
console.log(`This company ${company} is formed by ${Owner}`);


//String comparision
const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}
