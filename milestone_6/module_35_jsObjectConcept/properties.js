const bottle = {
    color:'yellow',
    hold:'water',
    price:50,
    isCleaned:true,
}

//getting all properties names
const keys=Object.keys(bottle)
// console.log(keys);

//getting all values
const values=Object.values(bottle)
// console.log(values);

//getting key and values together
const pairs = Object.entries(bottle)
// console.log(pairs);

//You can't add/delete property if you seal object
// Object.seal(bottle)

// you can't add/delete/update property when freeze
Object.freeze(bottle)

bottle.price=100;
bottle.height=14;

//delete a property from object
delete bottle.isCleaned;
console.log(bottle);