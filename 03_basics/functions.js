//Declaration
function displayuser(){
    console.log("Hariom Singh")
}
displayuser()//function call

//create a function do sum using console statement in the function
function sum(num1,num2){
    console.log(num1+num2)
}
sum(4,7);//  11

//function for multiplication with return statement in the function
function multiplication(n1, n2){
    return n1*n2;
}
console.log(multiplication(7,7)) //   49

//Create a function having user details
const user = "Hariom";
const userId = 1;
const userLoggedIn = true;
function userDetails(){
    return `The user ${user} is loggedIn and its user is ${userId} and all working : ${userLoggedIn}`
}
const details = userDetails();//you can assign a function to a variable
console.log(details)

//user function
function loginMessage(userName){
    if(userName===undefined){
        console.log("Please enter user Name!")
    }
    else{
        console.log(`User ${userName} loggedIn.`)
    }
}
loginMessage()//  Please enter user Name!

loginMessage("Hariom Singh")//  User Hariom Singh loggedIn.

// you can also give the default value to hte function
function add(num3 , num4=6)//given default value 6 to num4
{
    return num3+num4;
}

console.log(add(4))// num3 = 4 , num4 = 6 , sum = 10

console.log(add(1,2));// num3 = 1 , num4 = 2 , sum = 3 ,will override the default value


//Handling function with one parameter but multiple arguments
function petrolPrice(... price){
    return price;
}
console.log(petrolPrice(100,200,300,400))// o/p = > [ 100, 200, 300, 400 ]

function desolPrice(var1,var2,... price){
    return price;
}
console.log(desolPrice(100,200,300,400))// o/p => [ 300, 400 ] , 1st two values taken by the var1,var2


//objects in functions 
const userData = {
    name: "Hariom",
    id: 44
}
function userDataDetails(anyobject){
    console.log(`user name is ${anyobject.name} and Id is ${anyobject.id}`)
}
userDataDetails(userData)// passded object as argument  //o/p =>  user name is Dev and Id is 99

//you can also directly pass the object in the arguments
userDataDetails({
    name:"Dev",
    id:99
})// o/p = > user name is Dev and Id is 99

//Arrays in functions
const arr = [100,200,300];
function getArray(array){
    return array[2];
}
console.log(getArray(arr))//  300

//directly pass a array
console.log([1000,245,7654])//  7654

//A function can call itself. For example, here is a function that computes factorials recursively:

function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  console.log(factorial(1)); // 1
  console.log(factorial(2)); // 2
  console.log(factorial(3)); // 6
  console.log(factorial(4)); // 24
  console.log(factorial(5)); // 120
    