let myDate = new Date();
console.log(myDate);//  2023-10-06T12:01:24.441Z

console.log(typeof myDate)// object

console.log(myDate.toString());//  Fri Oct 06 2023 17:29:42 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());//  Fri Oct 06 2023

console.log(myDate.getTimezoneOffset());//  -330

console.log(myDate.getMilliseconds())

console.log(myDate.toLocaleString())// 6/10/2023, 5:35:39 pm


//Lets create your  own Date

let myCreatedDate = new Date(2012,0,8);
console.log(myCreatedDate.toLocaleString());// 8/1/2012, 12:00:00 am

//in JS Date => Month starts for 0

console.log(myCreatedDate.toString())// Sun Jan 08 2012 00:00:00 GMT+0530 (India Standard Time)


console.log(myCreatedDate.toDateString());// Sun Jan 08 2012

//                               (YY-MM-DD)
let myCreatedDateone = new Date('2056-08-09');
console.log(myCreatedDateone.toLocaleString())// 9/8/2056, 5:30:00 am  in this months starts from 1

//                               (MM-DD-YY)
let myCreatedDatetwo = new Date("11-05-2077");
console.log(myCreatedDatetwo.toLocaleString());//5/11/2077, 12:00:00 am



//Timestamp in JS

let myTimestamp = Date.now();
console.log(myTimestamp)//   1696594769537  it give you thet time in miliseconds

console.log(myDate.getTime());// 1696594955450

console.log(Date.now()/100)// 16965950065.06

console.log(Math.floor(Date.now()/100))// it will remove the decimal vlaues 16965951032

//other Mathods of date
let newDate = new Date;
console.log(newDate)//2023-10-06T12:26:20.045Z


//other mathods
console.log(newDate.getDate())// 6
console.log(newDate.getDay())// 5
console.log(newDate.getFullYear())// 2023
console.log(newDate.getMinutes())// 59
console.log(newDate.getTime())// 1696595359480
console.log(newDate.getMilliseconds())// 480
console.log(newDate.getHours())// 17


console.log(newDate.getMonth()+1);// o/p => 10

 let Name = "Hariom singh"
let Intro = `My name is ${Name} and the local time is ${newDate}`;//you can use like this
console.log(Intro)

//usefull Method
//You can customize
let yourDate = new Date().toLocaleString('default', {
    weekday: 'long',
    year: '2-digit',
    minute:"2-digit"
})

console.log(yourDate);// 23 Friday, 10




