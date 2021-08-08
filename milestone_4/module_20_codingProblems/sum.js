const numbers = [34,23,43,23,44,53,12,45,21]

let result = 0;
for(let i=0;i<numbers.length;i++){
    result +=numbers[i];

}
console.log(result);

// using function 
function Sum(arr){
    let result = 0;
    for(let i=0;i<arr.length;i++){
        result +=arr[i]
    }
    return result
}
console.log(Sum(numbers));