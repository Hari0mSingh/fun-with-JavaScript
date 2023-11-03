//Object Literal and this keyword
const user = {
    username: "Hariom Singh",
    loginCount: 7,
    signedIn: true,
    getUserDetails: function(){
        // console.log("got users from DB")
        // console.log("User name is :",this.username)
        console.log(this)
    }
}
// console.log(user.username)
// user.getUserDetails()
console.log(this)// o/p => {}

//constructor function
// const promiseOne = new Promise();
// const date = new Date()

function User(username,loginCount,isloggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
    return this;
}

// const userOne = User('Hariom', 6, true)
// console.log(userOne)
// const userTwo = User("Dev",4,false)//Will override the userOne values
// console.log(userOne)

const userOne = new User('Hariom', 6, true)
const userTwo = new User("Dev",4,false)//Will not override the userOne values
console.log(userOne)//Values are now not over-ridden
console.log(userTwo.constructor)// o/p => [Function: User]
