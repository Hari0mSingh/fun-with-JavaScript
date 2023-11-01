//Promse One
const promiseOne = new Promise((resolve,reject)=>{
    //Do an async task
    setTimeout(()=>{
        console.log("Async Task is completed")
        resolve();
    },1000)
});

promiseOne.then(()=>{
    console.log('Promise consumed');
})

//Promise two
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve();
    },1000)
}).then(function(){
    console.log('Task 2 completed')
})


//Promise three
const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({
            username:'Hariom Singh',
            gmail:'example@hariom.com'
        })
    },1000)
})
//fatch the data from promise
promiseThree.then(function(user){
    // console.log(user)
})

//Promise four
const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;//initially it is true for error handling
        if(!error){
            resolve({
                username:"Hariom Singh",
                passwd:'123'
            })
        }
        else{
            reject('ERROR : Somethig went wrong.')
        }
    },1000)
})
.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch((error)=>{
    console.log(error)
}).finally(()=> console.log('Promise either resolved or rejected'));

//Promise Five
const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({
                username:"Java script",
                passwd:'123'
            })
        }
        else{
            reject('ERROR : javascript went wrong.')
        }
    },1000)
})
async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}
consumePromiseFive()

//url data fetch
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        
        // const data = response.json()
        // console.log(data)
    } catch (error) {
        console.log('ERROR',error);
    }
}
getAllUsers()

//fetch 
fetch('https://api.github.com/users/Hari0mSingh')
.then((reponse)=>{
    return reponse.json()
})
.then((data)=> console.log(data))
.catch((error)=> console.log("Error :", error))