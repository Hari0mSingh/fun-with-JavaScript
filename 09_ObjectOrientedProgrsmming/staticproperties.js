
//static keyword examole

class User{
    constructor(username){
        this.username = username;
    }
    logme(){
        console.log(`User : ${this.username}`)
    }
    static createId(){
        return `123`// giving unique Ids to users
    }
}
user1 = new User('Hariom Singh')
// console.log(user1.createId()) can not access createId

class Teacher extends User{
    constructor(username,Email,password){
        super(username);//this will take the username from User class 
        this.Email = Email;
        this.password = password
    }
}
user2 = new Teacher('123','xyz@google.com','Hariomsingh')

user2.logme()// User : 123
console.log(user2.createId()) // user2.createId is not a function : here also you cannot access createId function 
