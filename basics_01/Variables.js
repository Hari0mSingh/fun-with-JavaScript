const accountId = 14355436
let accountEmail = "hariom@gmail.com"
var accountPassword = "64535"
accountCity = "Sonipat"
let accountState;//use of ; is optional
// accountId = 4352242  not allowed to change Value
console.log(accountId) //printing to the console the accountId
accountEmail = "abc@gmail.com"//Value changed
accountPassword = "12345"//Value changed
accountCity = "Panipat"//Value changed
/*
Prefer not to use Var because of block scope and functional scope 
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])