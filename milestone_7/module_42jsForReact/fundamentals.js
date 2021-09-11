// 1. How to declare a variable using let and const 

const fatherName = "android"
let season = 'rainy'
season = "winter"

//2.basic condition >,<,===,!==,<=,>=
// multiple conditions: &&, ||
if(fatherName === 'android' || season ==='rainy'){

}
else if(fatherName==='android'){

}
else{}

//3. array declare
// >> indexedDB,length,push,
const numbers = [544,3423,4,3]
numbers[0]=56;

//4.for loop
for(let i =0;i<numbers.length;i++){
    const number = numbers[i]
    console.log(number);
}
//5 function
function multiply(num1,num3){
    const result = num1*num2;
    return result 
}
const output = multiply(30,30)

//6. object
//3 ways to access property by name
const student ={
    name:"rahi chosdyr",
    age:20,
    movies:['king khan','dhakar mastan']
}
console.log(student.age); //direct by property
console.log(student['age']); // access via property name string
const myvar = 'age'
console.log(student[myvar]); //access via property name in variable
