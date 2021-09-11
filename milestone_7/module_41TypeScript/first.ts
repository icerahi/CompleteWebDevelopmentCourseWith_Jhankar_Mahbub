// let money = 500;
// money= 'Taka posa Hath er moila'; // not allowed
// money = false  // not allower

// let honey = '';
// let kony = false;
// money = 55;

let money:number = 500;
let honey:string = "honey"
let funny:boolean = false 

const age:number = 21
honey = 'bla bla'
console.log(honey)

function add(first:number,second:number):number{
    const result = first + second;
    return result;
}
const output:number=add(45,45)

function doubleConsole(number:number):void{
    console.log(2*number)
}

// multi purpose 
/* function add(first:number|string,second:number|string):number|string{
    const result:string|number = first + second;
    return result;
}
const output:number=add(45,45)
const fullname=add('IMRQN','hASAN') */

let player:(number|string)="rahi"