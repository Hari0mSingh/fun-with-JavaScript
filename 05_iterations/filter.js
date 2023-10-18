//filter example

const numbers = [1,2,3,4,5,6,7,8,9]
// const nums = numbers.filter((item)=>{
//     return item>5
// })
//can als be done like this
const nums = numbers.filter((item)=> item>5)
console.log(nums)// o/p => [ 6, 7, 8, 9 ]

//Note => when you use scope{} , you need to return the value

//Using forEach loop
const digits = [3,4,6,78,9,1,2,80]
const printdigits = []
digits.forEach((item)=>{
    if(item>50){
        printdigits.push(item)
    }
})
console.log(printdigits)// o/p=>  [ 78, 80 ]

//   Book example

const books = [
{
    BookName : "Bug hunting",
    published : 1980,
    author : "hariom"
},
{
    BookName : "pen testing",
    published : 2008,
    author : "Ramshiv"
},{
    BookName : "hunting",
    published : 2003,
    author : "dev"
},{
    BookName : "devlopment",
    published : 2012,
    author : "muskan"
},{
    BookName : "Bug hunting",
    published : 2023,
    author : "keshav"
},{
    BookName : "Bug hunting",
    published : 2022,
    author : "jamalu"
}]

//We access the objects using filter method
const userBook = books.filter(
    (bk)=> bk.published>2000
)
console.log(userBook) 
 /* o/p=>
                                   
[
  { BookName: 'pen testing', published: 2008, author: 'Ramshiv' },
  { BookName: 'hunting', published: 2003, author: 'dev' },
  { BookName: 'devlopment', published: 2012, author: 'muskan' },
  { BookName: 'Bug hunting', published: 2023, author: 'keshav' },
  { BookName: 'Bug hunting', published: 2022, author: 'jamalu' }
]
*/

