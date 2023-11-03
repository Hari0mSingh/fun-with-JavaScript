function multiplyBy5(num){
    return num*5;
}
multiplyBy5.power = 2;

console.log(multiplyBy5(6))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)

//create a user
function createUser(username,score){
    this.username = username;
    this.score = score;
}
// defing your funtionality to a prototype 
createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Score is : ${this.score}`)
}
console.log(createUser.prototype)// { increment: [Function (anonymous)], printMe: [Function (anonymous)] }

//ERROR
// const user1 = createUser("Hariom",89)
// const user2 = createUser("jamalu",99)

// user1.printMe() //TypeError: Cannot read properties of undefined (reading 'printMe')

//Right way
const user1 = new createUser("Hariom",89)
const user2 = new createUser("jamalu",99)
user1.printMe()//  Score is : 89
