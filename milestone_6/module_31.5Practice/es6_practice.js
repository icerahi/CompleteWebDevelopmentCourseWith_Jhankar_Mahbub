//1. let const
const name ="Imran Hasan Rahi";
let age = 20;

//2. template string
// a) use variable
const intro = `My name is ${name},I'm ${age} years old.`
console.log(intro);
// b) use object property
const Human ={name:'rahi',age:20}
console.log(`My name is ${Human.name},I'm ${Human.age} years old`);

//3.arrow function

const result =x => x%5
console.log(result(5));
const twoparam =( x,y )=> (x+2)*(y+2)
console.log(twoparam(10,10));
const threeparam =(a,b,c) => a*b*c 
console.log(threeparam(2,2,2));
const multiline = (a,b) =>{
    return a*b
}
console.log(multiline(10,10));

//4.[home work] regular function vs arrow function

//5. numbers of array's element multiply by 5 using map
const numbers = [2,3,4,6,40,49,56,6,4]
const multiplyBy5 = numbers.map(item => item*5)
console.log(multiplyBy5);

//6[challenging] numbers of array, item filter by odd number
const oddNumber = numbers.filter(item => item%2) //item%2 == 0 false,only take true
console.log(oddNumber);

//7[challenging] array of object (e.g. products).use find to get the object with price 500
const products = [
    {name:"angur",price:200},
    {name:"case",price:300},
    {name:"headphone",price:500},
    {name:"mobile",price:1500},
]
const productwith500Price = products.find(item => item.price==500)
console.log(productwith500Price);

//8. use destructuring for a simple object;
const Person ={Aname:"rahi",designation:"Engineer",salary:500}
const {salary,designation} = Person;
console.log(salary,designation);

//9. You have an array. Now use destructing to create a simple
// variable to get the third element.
const Tarry = ["sonar","bangla",'muri','khao']
const [,,third]=  Tarry;
console.log(third);

//10. [optional] just write a function with three param ,last param have defualt param 7
// this function will take three param and return sum of three param
const ThreeSum =(a,b,c=7)=> a+b+c 
console.log(ThreeSum(2,2,2));
console.log(ThreeSum(2,2,));