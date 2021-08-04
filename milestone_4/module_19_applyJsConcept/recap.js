//variable
var time =new Date();
var bookPrice = 140;
var isWhite = false;

//array

var partners=['sajid','mojid','nojid','logit']
var elementCount = partners.length
var nojidIndex = partners.indexOf('nojid');
partners.push('kajit')
partners.pop();

//conditionals

if (bookPrice<120){
    console.log('I will buy this book');
}
else{
    console.log('Mama,kicu discount den na,apni na mam!');
}

// loop
var i = 0;
while(i<=17){
    //do some work
    i++;
}
for (let i = 0; i < 17; i++) {
    console.log(i);
    
}
//function
function isMoonUp(time){
    if(time >=19 && time <=5){
        return true
    }
    return false
}
var moonStatus = isMoonUp(21);

//let const

//value of variable could change
let price = 27;
price =28;
price =31

//value of the variable will not change
const name ='lal a lal mr .helal';
console.log(name);


