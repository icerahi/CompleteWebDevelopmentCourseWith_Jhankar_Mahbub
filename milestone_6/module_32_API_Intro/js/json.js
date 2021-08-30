// Javascript object Notation
// JSON
const user = {id:11,name:"gorib amir",job:'actor'}
const strigify = JSON.stringify(user)
// console.log(user);
// console.log(strigify);

const shop={
    name:"Alia store",
    address:"Ranbir road",
    profit:1555,
    products:['laptop','mobbile','pepsi'],
    owner:{
        name:"alia",
        profession:"actor",
    },
    isExpensive:false,
}
//JSON.stringify to convert object to a string
const shopStringified = JSON.stringify(shop)
// console.log(shop);
console.log(shopStringified);

// JSON.parse to convert a string to a object
const converted = JSON.parse(shopStringified)
console.log(converted);
