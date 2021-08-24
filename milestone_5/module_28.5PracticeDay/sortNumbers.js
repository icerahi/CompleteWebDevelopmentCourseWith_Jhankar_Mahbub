/* take verious numbers array and sort it using js. */

const numbers=[32,111,32,43,65,77,84,77,98,12,36,87]

//low to high
const lowToHighSort = numbers.sort(function(a,b){return a-b})
console.log(lowToHighSort);

//high to low
const hightToLowSort = numbers.sort(function(a,b){return b-a})
console.log(hightToLowSort);