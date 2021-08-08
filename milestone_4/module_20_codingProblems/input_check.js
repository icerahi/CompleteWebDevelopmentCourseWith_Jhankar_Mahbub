
function fibonacciSeries(n){
    if (typeof n != 'number'){
        return 'Please give a number'
    }
    if(n < 2){
        return 'Please enter a positive number greater than 1'
    }
    
    const fibo=[0,1]
    for(let i=2;i<n;i++){
        fibo[i]=fibo[i-1]+fibo[i-2]
    }
    return fibo
}
console.log(fibonacciSeries(3));