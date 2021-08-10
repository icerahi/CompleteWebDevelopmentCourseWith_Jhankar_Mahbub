
// let factorial =1;
// for (let i=6;i>=1;i--){
//     factorial*=i
// }
// console.log(factorial);

function factorial(n){
    if(n==1){
        return 1
    }
    return n* factorial(n-1)
}
console.log(factorial(6));