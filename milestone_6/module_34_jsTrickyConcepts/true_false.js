/* 
Falsy:
    false
    0
    empty string
    undefined
    null
    NaN
----------------------------------------
Truthy:
    true
    any number(positive or negative)
    any string including single whitespace,'0','false'
    array []
    object {}
    anything else that is not falsy will be truthy
 */
 

let x= {}
console.log('value of x',x);
if(x){
    console.log('variable si truthy')
}
else{
    console.log('variable is falsy');
}