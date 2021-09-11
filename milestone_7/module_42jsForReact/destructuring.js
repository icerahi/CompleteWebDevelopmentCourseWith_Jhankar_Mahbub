// 1 array destructuring
const numbers = [32,45]
const [a,b]=numbers
console.log(a,b);

function boxify(num1,num2){
    const numbers =[num1,num2]
    return numbers
}
const [first,second] = boxify(60,20)
console.log(first);

const tech={name:'laptop',price:32000,brand:'lenovo',color:'silver'}

const {name,price}=tech 
console.log(name,price);

//object destruring
// const {name,age}={name:"alu",age:14}
// const {name,age}={id:12,salary:1330,name:"alu",age:14}

const employee = {
    idle:"vscode",
    designation:"Devloper",
    machine:'mac',
    language:['html','css','js'],
    specification:{
        height:56,
        weight:54,
        address:"kumarkhali",
        drink:'water'
    }
}
// const {machine,specification:{address}} = employee
const {idle,designation } = employee
const {address} = employee?.specification
console.log(address);