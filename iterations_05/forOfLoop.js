/*
we will discuss => for of , Maps , for in , forEach loops in Javascript
*/

// For oF loop example
const arr = [1,2,4,5,7,8,9]
for (const i of arr) {
    console.log(i);
}


const name = ['H', 'A', 'R','I','O','M'];
for (const character of name) {
    console.log(character)
}

// Map => They are like Arrays but can hold only unique values with -> key:value pair

const myMap = new Map();//Declaration of wmpty map
myMap.set ('IN', 'India')
myMap.set ('USA', 'united states of Amarica')
myMap.set ('FR', 'france')
/* console.log(myMap)  o/p => Map(3) {
                                     'IN' => 'India',
                                     'USA' => 'united states of Amarica',
                                     'FR' => 'france'
                                     }
*/

//Looping in Maps
for (const countyNames of myMap) {
    console.log(countyNames);// will return a Array of keys AND values
}

//Access key , values seperately in Maps
for (const [key,value] of myMap) {
    console.log(key ,' is => ', value);// this will give key and value seperately
}

//for of loop on object
const myobj = {
    name:"Hariom",
    Lname:"Singh"
}
for(itme of myobj){
    // console.log(itme) o/p =>   myobj is not iterable
}

