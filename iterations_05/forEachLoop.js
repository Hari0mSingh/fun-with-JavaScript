//in this we will discuss For-Each Loop

//mostly used in Array

//example
const arr = [1,2,3,4,5,6,8]
arr.forEach(function print(item){
    console.log(item)// o/p=> 1,2,3,4,5,6,8
})

//callback function can be a simple function or can be a arrow function

//example with arrow function 
//arrow function-->    ()=>{}

const names = ["g","t","j","a"]
names.forEach((val)=>{
    console.log(val) // o/p=> g,t,j,a
})


const num = [4,5,6,7,8,9]

// num.forEach(printNum)//give the refernce of the function

function printNum(item){
    console.log(item)
}

//A parameter cna be => item , index , arr

num.forEach((item,index,num)=>{
    console.log(item,index,num)
})
/* o/p is=>
   4 0 [ 4, 5, 6, 7, 8, 9 ]
   5 1 [ 4, 5, 6, 7, 8, 9 ]
   6 2 [ 4, 5, 6, 7, 8, 9 ]
   7 3 [ 4, 5, 6, 7, 8, 9 ]
   8 4 [ 4, 5, 6, 7, 8, 9 ]
   9 5 [ 4, 5, 6, 7, 8, 9 ]
*/

//objects in Array and then access the object by ForEach loop
const userDetails = [
    { Name: "hariom" },
    { Name: "Dev" },
    { Name: "Ravi" },
    { Name: "Ghio" }
];

userDetails.forEach((data) => {
    console.log(data.Name);
});
// o/p =>  hariom
//         Dev
//         Ravi
//         Ghio