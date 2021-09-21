
const add =(num1,num2)=> num1+num2 
const multiply =(num1,num2)=> num1*num2 
const substruction =(num1,num2)=> num1-num2 


//reduce
const nums=[34,56,78,98]

const sum=nums.reduce((a,b)=>a+b,0)
console.log(sum);

const jinis=[
    { id: 1, name: 'alta', price: 25 },
    { id: 2, name: 'Nail Polish', price: 500 },
    { id: 3, name: 'face mask', price: 250 },
    { id: 4, name: 'mascara', price: 550 }
  ]
//reduce take to params (reducer function,initailvalue
const jinisTotal = jinis.reduce((previous,current)=> previous+current.price,0) 
console.log("jinish total",jinisTotal);

export {add,multiply,substruction}

