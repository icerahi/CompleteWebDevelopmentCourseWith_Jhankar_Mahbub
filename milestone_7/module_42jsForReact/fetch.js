// 1 json =>stringify, parse
const student = {
  name: "rhai",
  age: 32,
};

const studentJson = JSON.stringify(student); //convert js obj to jsonString
console.log(studentJson);

const studentObj = JSON.parse(studentJson); // convert json to js obj
console.log(studentObj);

//2.fetch
// const url = "https://storyspac.pythonanywhere.com/api/articles/";
// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data));


//keys values,

const keys = Object.keys(student)
const values = Object.values(student)

//for 
const numbers = [23,32,43,43,54]
numbers.forEach(n =>console.log(n) )
numbers.map(num => num*2)

// for of on array like object
// loop on an obj using for in

// add or remove from an array
const products =[
    {name:'laptop',price:32000,brand:'lenovo',color:'silver'},
    {name:'phone',price:32000,brand:'iphone',color:'gold'},
    {name:'water',price:33000,brand:'ripon',color:'silver'},
    {name:'laptop',price:32000,brand:'lenovo',color:'silver'},
]

const newProduct = {name:'webcame',price:900,brand:'lala'}

//copy product array and  add new Product

const newProducs=[...products,newProduct]
console.log(newProducs);

///create a new array without one specific item
//remove phone means create a new array without the phone

const remaining = products.filter(product => product.name!=='phone')
console.log(remaining);