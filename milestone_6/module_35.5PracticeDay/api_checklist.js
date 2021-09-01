/* 
1. Object with property (string,boolean,number,object,
    array,method which will return a property value) */


const myObj={
    name:"Rahi",
    adult:true,
    age:20,
    figure:{
        height:'5 feet 7 inch',
        color:"kala",
        hair:'kala',
    },
    language:['bangla','english','hindi'],
    about:function(){
        return `I'm ${this.name},I'm ${this.age} year old`
    }
}
myObj.name='Imran hasan'
console.log(myObj.about());

/* 2. templete string,minimum 3 property will be dynamic(
    nested object property,array second element,another property
) */
const value = `${myObj.name},${myObj.adult},${myObj.age},${myObj.figure.color},${myObj.language[1]},${myObj.about()}`
console.log(value);

/* 3.1no parameter arrow function return 89
3.2.single parameter arrow function,will divide input by 7
3.3 arrow function with two parameters, return sum/2
3.4 multiline arrow function ,two parameter,add 7 with all param
*/

const noParamArrow = ()=> 89
console.log(noParamArrow());

const singleParamArrow = a => a/7
console.log(singleParamArrow(10));

const result = (a,b)=> (a+b)/2
console.log(result(5,4));

const mutlti = (a,b)=>{
    return (a+7)+(b+7)
}
console.log(mutlti(10,10));

/* 
4. map and divide each element by 7 */
const numbers =[1,3,4,2,5,6,9,32]
console.log(numbers.map(item => item/7));
/* 
5 */
numbers.forEach(item => console.log(item/7))
const filter = numbers.filter(item => item%2)
console.log(filter);
const find = numbers.find(item => item%3)
console.log(find);
/* 
6
.desctrucuring on object and array */
const {name,age}=myObj;
console.log(name,age);
const [,second]=numbers
console.log(second);

/* 7. did previous practice
 */
/* 8=>9>10- did

 */
