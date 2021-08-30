/* 
``Undifined:
1. variable value not assigned
2. function but didn't write return anything
3.wrote return but not return any value or variable;
4. parameter didn't pass
5. property that doesn't exist in a object
6. accesssing array element out of range
7. accessing deleted array elements
8. explicitly set value to undefineed
 */

let first;
// console.log(first);
function second(x,y){
    const sum = x+y
}
// console.log(second(3,81));

function add (a,b){
    const sum =a+b
    return;
    const fun = a*b;
    return sum ;

}
const fourth = add(3,4)
console.log(fourth)

function double(a,b){
    const result=a*2
    console.log(b)
    return result;
}
double(10)

const fifth = {name:'sagor',age:15,location:'bandargan'}
console.log(fifth.phone);

const sixth = [43,44,12,34,17]
console.log(sixth[6])




delete sixth[2]
console.log(sixth[2])

const seventh = undefined;
console.log(seventh);

const myObj ={name:'samad',profession:null}
console.log(myObj.profession="rahi");