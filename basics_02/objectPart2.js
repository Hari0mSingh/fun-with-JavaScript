// Singleton Object
const linkedinUser = new Object();
console.log(linkedinUser)// {} empty object 

//Non-singleton object
const twitterUser = {};
console.log(twitterUser)// {} empty object

// give values to the object
linkedinUser.name = "Hariom Singh";
linkedinUser.age = 20;

console.log(linkedinUser)


//Nesting objects
const regularuser = {
    email:"hariomsingh@goole.com",
    fullName : {
        userFullName:{

            FName:"Hariom",
            LName:"Singh"
        }
    }
}

//Access nested objects
console.log(regularuser.fullName.userFullName.FName);// Hariom

//concatination of objects
const obj1 = {1:'a',2:'b'};
const obj2 = {3:'c',4:'d'};
// const obj3 = {obj1,obj2};// it combines the obj1 and obj2 in obje3 as objects which is we dont want
// console.log(obj3)//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }


// Right way of concatination 
// const obj3 = Object.assign(obj1,obj2);
// console.log(obj3)// o/p => { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj3 = Object.assign({},obj1,obj2)//recommended method
console.log(obj3) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


//here you can user spread method
const obj4 = {5:'e',6:'f'}
const obj5 = {...obj1,...obj2,...obj4}
console.log(obj5)//   { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


//Data that comes from database it comes in the form of array objects like this
const users = [
    {
    id:1,
    name:"Hariom"
    }
]
//access 
console.log(users[0].name)// Hariom


//Acces only keys from the onject
console.log(Object.keys(linkedinUser))// return the array of keys >>  [ 'name', 'age' ]

//Access only values from the object
console.log(Object.values(linkedinUser))// return the array of values >>  [ 'Hariom Singh', 20 ]



//Enteries
console.log(Object.entries(linkedinUser))//return every key-value pair in seperate arrays => [ [ 'name', 'Hariom Singh' ], [ 'age', 20 ] ]


// Checking that a given value is in the object or Not
console.log(linkedinUser.hasOwnProperty('name'));// true
console.log(linkedinUser.hasOwnProperty('id'));// false
