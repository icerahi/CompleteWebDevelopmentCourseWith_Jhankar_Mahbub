const products =[
    "Dell hadcore i29 200GB laptop",
    'iphone 1Tb camera flashlight phone',
    'Dellyellow laptop with black camera',
    'Dell 1X50 Lenovo commercial yoga laptop',
    'LG supernova laptop',
    'Dell HTC low price Phone',
    'purple color phone with Laptop'
]
const searching ='laptop';
const output =[]

// search product using indexOf if not exists return -1
for(const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
        // output.push(product)
    }
}
// console.log(output);

// search product using includes,if not exists return false
for(const product of products){
    if(product.toLowerCase().includes(searching.toLowerCase())){
        // output.push(product)
    }
}
// console.log(output);

//startWith and endWith
for(const product of products){
    if(product.toLowerCase().startsWith('dell')){
        output.push(product)
    }
}
console.log(output);
