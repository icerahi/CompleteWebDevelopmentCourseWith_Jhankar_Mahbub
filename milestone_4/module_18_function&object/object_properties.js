var computer ={
    price:29000,
    storage:'14gb',
    color:'silver',
    processor:'intel i5',
}
// console.log(computer);
// console.log(computer.processor);

var computerPrice = computer.price
console.log(computerPrice);

//set a object property value
computer.price = 23000;
// console.log(computer);


//different way to set a value of an object property
var priceProperty = 'price';
computer.price = 2000;
computer['price']=23000;
computer[priceProperty] = 50000000

var storageProperty ='storage';
computer[storageProperty]="123gb";
computer['storage']='1tb';
computer.storage ='5tb';
console.log(computer);