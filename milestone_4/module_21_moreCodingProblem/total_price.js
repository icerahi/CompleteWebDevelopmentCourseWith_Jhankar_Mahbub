const products =[
    {name:"laptop",price:100000},
    {name:'shirt',price:500},
    {name:'watch',price:3500},
    {name:'phone',price:55000}
]

let total = 0;
for(const product of products){
    total +=product.price
}
// console.log(total);

let cartTotal = 0;
const cart =[
    {name:"laptop",price:100000,quantity:1},
    {name:'shirt',price:500,quantity:8},
    {name:'watch',price:3500,quantity:3},
    {name:'phone',price:55000,quantity:1},
]

for(const product of cart){
    console.log(product);
    const productTotal = product.price *product.quantity
    cartTotal +=productTotal
}
console.log(cartTotal);