class user{
    constructor(email,password){
        this.email = email,
        this.password = password
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}hariom` //this can be done
    }
    set password(value){
        // this._password = value.toUpperCase() //this can also be used
        this._password = value 
    }
}
const user1 = new user('xyz.com','abc')
console.log(user1.password)//  user { email: 'xyz.com', _password: 'ABC' }
console.log(user1.email)