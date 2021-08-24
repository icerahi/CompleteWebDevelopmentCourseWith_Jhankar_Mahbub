const friends = ['Tom Hanks','Tom Cruise','Tom Bray','Tom soleman']

const fLengths = friends.map(friend => friend.length)
// console.log(fLengths);

const products=[
    {name:'water bottle',price:50,color:'yellow'},
    {name:'mobile phone',price:1500,color:'black'},
    {name:'smart watch',price:100,color:'black'},
    {name:'stikcy note',price:30,color:'pink'},
]

const productNames = products.map(item => item.name)
const productPrices = products.map(item => item.price)
console.log(productNames);
console.log(productPrices);

const a=products.map(item => item) //return an array

const b=products.forEach(item => item) // return nothing
