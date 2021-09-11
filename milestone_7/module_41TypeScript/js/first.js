"use strict";
// let money = 500;
// money= 'Taka posa Hath er moila'; // not allowed
// money = false  // not allower
// let honey = '';
// let kony = false;
// money = 55;
let money = 500;
let honey = "honey";
let funny = false;
const age = 21;
honey = 'bla bla';
console.log(honey);
function add(first, second) {
    const result = first + second;
    return result;
}
const output = add(45, 45);
function doubleConsole(number) {
    console.log(2 * number);
}
// multi purpose 
/* function add(first:number|string,second:number|string):number|string{
    const result:string|number = first + second;
    return result;
}
const output:number=add(45,45)
const fullname=add('IMRQN','hASAN') */ 

//testing api
/* fetch('https://storyspac.pythonanywhere.com/api/articles/')
.then(res => res.json())
.then (data => console.log(data)) */

const getData =async()=>{
    const res = await fetch('https://storyspac.pythonanywhere.com/api/articles/')
    const data = await res.json()
    console.log(data);
}
getData()
console.log('got the data')

