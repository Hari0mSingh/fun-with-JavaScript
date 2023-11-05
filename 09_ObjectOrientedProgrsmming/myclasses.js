//Class Example
class User{
    constructor(username,Email,password){
        this.username = username
        this.Email = Email;
        this.password = password
    }
    encryptedPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new User('Hariom','xyz@gamil.com','413');

console.log(user1.encryptedPassword())// 413abc
console.log(user1.changeUsername())// HARIOM


//Behind the scene
function User(username,Email,password){
    this.username = username
    this.Email = Email;
    this.password = password
}
User.prototype.encryptedPassword = function(){
    return `${this.password}abc`;
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const user2 = new User('dev','abc@gamil.com','123');
console.log(user1.encryptedPassword())// 123abc
console.log(user1.changeUsername())// DEV