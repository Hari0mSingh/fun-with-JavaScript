const User = {
    _email : 'h@bughunter.com',
    _password : 'fmk',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value;
    }
}
//creating object using factory function
const user1 = Object.create(User)
console.log(user1.email)