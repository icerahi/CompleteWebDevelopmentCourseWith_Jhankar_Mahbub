//1.write 3 variables (number,string,boolean)

const age = 30;
const name = 'imran hasan';
const is_married = false;

//2. 2 variables using(let,const).
let height=6
height =10
const teeth = 32
 
//3.Simple math operation() +,-,*,/,%
const a= 10;
const b=10;
const add = a+b;
const sub = a-b;
const multi = a*b;
const division = a/b;
const modulus = a%b;
console.log('add:',add);
console.log('sub:',sub);
console.log('multiply:',multi);
console.log('division:',division);
console.log('modulas:',modulus);

// 4. comparision ()

console.log(a<b);
console.log(a<=b);
console.log(a>b);
console.log(a>=b);
console.log(a==b);
console.log(a!=b);

/* 5. two conditions. case-1:fullfill both conditions, 
case-2:fullfill at least one condition  */
let boyos=18;
if (boyos>=18 && boyos<=50){
    console.log('you are able to do for country');
}
let money=1000
if((boyos>=18 && boyos<=50) || (money>50000)){
    console.log('you are also able');
}

// 6. if-else 
if (boyos<=18){
    console.log("you are sisu");
}
else if (boyos>=18 && boyos<=40){
    console.log("you are young");
}
else{
    console.log("you are buira");
}

//7. while loop 7 to 19 all number and odd numbers
let i =7;
while(i<=19){
/*     console.log(i);
    i=i+2; */

    //  or

    if(i%2!=0){
        console.log(i);
    }
    i++
    
}

// 8. declare an array. number of elements. change 4th position element.
// add or remove customElements. check wheather specific value exists in the array
console.log("checklist 8");
let arr = [12,32,33,11,34,54,67,43]
arr.push(120)
arr.pop()
arr.shift()
arr.unshift(20)
 
console.log(arr.indexOf(100));
for(let i=0;i<arr.length;i++){
    
    if(i==3){
        arr[3]=420
    }
    console.log(arr[i]);
}

console.log("another");
// 9. use any for loop to display every elements of an array
for(const element of arr){
    console.log(element);
}

console.log("checklist 10");
// 10. You have an array of numbers.Display only the number bigger than 80;
let numbers =[12,45,80,81,90,222]
for(const number of numbers){
    if (number>80){
        console.log(number);
    }
}


//11. write a function that takes three numbers and return the multiplication
// of 3 numbers
console.log("checklist 11");
function multiply(a,b,c){
    return a*b*c;
}
console.log(multiply(10,10,10));

// 12.declare an object and change any property of that 
const books={
    name:"sonar bangla",
    pages:36,
    author:'rahi chowdury'

}
books.author="imran hasan"
books['page']=120 //new added
books['pages']=420 
console.log(books);