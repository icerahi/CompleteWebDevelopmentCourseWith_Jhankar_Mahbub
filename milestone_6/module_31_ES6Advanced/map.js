const numbers = [4,5,6,7,8]

// const output=[]
// for(const number of numbers){
//     const result = number*2
//     output.push(result)
// }
// console.log(output);

const double = numbers.map(item => item*2)
console.log(double);

const squares = numbers.map(item => item*item)
console.log(squares);