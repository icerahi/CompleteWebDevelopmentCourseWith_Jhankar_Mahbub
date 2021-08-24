const  numbers = [5,13,7,41,29,79,111,5,30,2,19]
const bigNumbers = numbers.filter(item => item >20)
const smallNumbers = numbers.filter(item => item <10)
console.log(bigNumbers);
console.log(smallNumbers);

const products=[
    {name:'water bottle',price:50,color:'yellow'},
    {name:'mobile phone',price:1500,color:'black'},
    {name:'smart watch',price:100,color:'black'},
    {name:'stikcy note',price:30,color:'pink'},
]
// filter gives array
const expensive = products.filter(product => product.price >100)
// console.log(expensive);
const blacks = products.filter(product => product.color =="black")
console.log(blacks);


//find gives first element(just one element)
const whiteItem = products.find(product => product.color =='black')
console.log(whiteItem);