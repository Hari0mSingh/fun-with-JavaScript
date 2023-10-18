//addition using map

const intnums = [1,2,3,4,5,6]
const add = intnums.map((num)=> num+10)
console.log(add)// o/p=>  [ 11, 12, 13, 14, 15, 16 ]

//chaning => applying many methods together

const numbers = [1,2,3,4,5,6,7,8,9]
const print = numbers.map((item)=>item*10).map((item)=>item+5).filter((item)=>item>50)
console.log(print)// o/p=> [ 55, 65, 75, 85, 95 ]


// Reduce
const arr1 = [12,3,56,77,87]
const printarr = arr1.reduce(function(acc,currvalue){
    console.log(`accumulator value : ${acc} and current value : ${currvalue}.`)
    return acc+currvalue
},0)
console.log(`the sum is ${printarr}`)
 //                      o/p=> accumulator value : 0 and current value : 12.
//                             accumulator value : 12 and current value : 3.
//                             accumulator value : 15 and current value : 56.
//                             accumulator value : 71 and current value : 77.
//                             accumulator value : 148 and current value : 87.
//                             the sum is 235

//redue with arrow function 
const digits = [1,2,4,5]
const  printarr2 = digits.reduce((acc,currvalue)=>(acc+currvalue),0)
console.log(printarr2)// o/p=> 12
