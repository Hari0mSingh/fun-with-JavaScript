//inheritence
class User{
    constructor(username){
        this.username = username;
    }
    logme(){
        console.log(`the Username is : ${this.username}`)
    }
}
class Teacher extends User{
    constructor(username,Email,password){
        super(username);//this will take the username from User class 
        this.Email = Email;
        this.password = password
    }
    addCource(){
        console.log(`new cource was added by : ${this.username}`)
    }
}
//create a object of Teacher class
const user1 = new Teacher('Hariom','xyz@gmail.com','1234');
user1.addCource()
user1.logme()


//create a object of User class
const user2 = new User('Shiv')
// user2.addCource() //ERROR =>  user2.addCource is not a function
user2.logme()// the Username is : Shiv


console.log(user1===user2)// false

console.log(user1 instanceof Teacher) // true
console.log(user1 instanceof User) // true

console.log(user2 instanceof Teacher) // False
console.log(user2 instanceof User) // true

