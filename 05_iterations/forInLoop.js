//Looping on object

//using for-in loop

const myobj = {
    fname:"Hariom",
    Lname:"Singh",
    id:24
}

for(const key in myobj){
    // console.log(myobj)
}
// o/p=> { fname: 'Hariom', Lname: 'Singh', id: 24 }
//       { fname: 'Hariom', Lname: 'Singh', id: 24 }
//       { fname: 'Hariom', Lname: 'Singh', id: 24 }

//acces key and value of object seperately
for(const key in myobj){
    console.log(`key is : ${key} and value is: ${myobj[key]}`)
}
// o/p=> key is : fname and value is: Hariom
//       key is : Lname and value is: Singh
//       key is : id and value is: 24


//can we iterate Array with For-in loop ?
const myarr1 = [1,2,3,4,5,6,7,8,9]
for(const item in myarr1){
    // console.log(item)
}

const myarr2 = ['h','r','t']
for(const item in myarr2){
    console.log(item)
}
// o/p => 0,1,2 it is printing the Array index but we want the actual values to be printed

//do this
const myarr3 = ['h','r','t']
for(const item in myarr3){
    console.log(myarr3[item])
}
// o/p => h
//        r
//        t


