
const numbers = [3454,2,4,24]
const student = {
    name:'rahi chekn',
    age:32,
    movies:['bal','blabla']
}
// 1. template string 
const about = `my name is ${student.name} age of ${student.age}
number ${numbers[2]} aslo liked movies ${student.movies[0]}`

console.log(about);

//2.arrow function
const getfive = ()=>55;
const add65 = num => num + 65
const isEven = x=>x%2==0
const addmulti =(a,b,c) => a+b+c ;
const multiline =(num1,num2)=>{
    const sum =num1+num2 ;
    return sum
}

//3. spread operator

const nwNumbers=[...numbers,120];
numbers.push(420)
console.log(nwNumbers);
console.log(numbers);
