// 'almus',5,true,{},[]  => truthy value
//empty string '',0,'false,null,undefined  => falsy value

let myVar = 5;
if(myVar){
    myVar =myVar* 100
}
else{
    myVar=0
}
console.log(myVar);

let myMoney = 50;
// you check negavtive or false anything 
if(!myMoney){

}

const money = 800;
let food;
if(money>100){
    food='binirani'
}
else{
    food='cha buscut'
}

//tarnary
let food1 = money>100? 'birinai':'cha biscuit'
console.log(food1);

let drink = (money>100 && myVar >100)?'coke':'finter water';
console.log(drink);

// number to string
const num1=52;
// console.log(num1);
const numStr= num1+'';
// console.log(numStr);

// string to number
// string er age + dile seta number hoye jay
const input ='560'
const inputNum = +input //
console.log(inputNum);

//
let isActive = false;
const showUser = ()=> console.log('display user');
const hideUser = ()=> console.log('hide user');

isActive?showUser():hideUser()
//
// use && if the left side is true then right side will be execute
isActive && showUser() // if true then execute next

//use || if the left side is false then right side will be executed
isActive || hideUser() // if false the execute next

//toggle boolean 
isActive = !isActive
console.log(isActive);