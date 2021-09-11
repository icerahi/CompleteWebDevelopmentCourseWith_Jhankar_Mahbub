
const products =[
    {name:'laptop',price:32000,brand:'lenovo',color:'silver'},
    {name:'phone',price:32000,brand:'iphone',color:'gold'},
    {name:'water',price:33000,brand:'ripon',color:'silver'},
    {name:'laptop',price:32000,brand:'lenovo',color:'silver'},
]

const brands = products.map(product => product.brand)
const prices = products.map(product => product.price)

products.forEach(item =>{

})

// 3. filter c
const cheap = products.filter(data => data <=500)
console.log(cheap);

const SpecificName = products.filter(p=>p.name.includes('n'))
const special = products.find(p=>p.name.includes('n'))