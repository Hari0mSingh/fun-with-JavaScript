//IN this we are going to understand the working of For loop
/*synatx
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/

//Example
for (let index = 0; index <= 10; index++) {
    console.log(`loop count ${index}`)    
}

//Nesting For loop
for(let i=1; i<=10; i++){
    console.log(`outer loop ${i}`);
    for(let j=1; j<=10; j++){
        console.log(`inner loop ${j} outer loop count is ${i}`)
    }
}

//1 to 10 table using for loop

for(let i=1; i<=10; i++){
    console.log(`Table of ${i} is :`)
        for(let j=1; j<=10; j++){
            console.log(`${i}*${j} is : ${i*j}`)
        }
    
}

//For loop use in array

const arr = ["hariom", "Dev" , "Shiv"];
for(let i = 0; i<arr.length;i++){
    console.log(arr[i]);
}