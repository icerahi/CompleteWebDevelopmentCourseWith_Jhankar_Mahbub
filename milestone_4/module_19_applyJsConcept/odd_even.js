
function isEven(num){
    if (num%2==0){
        return true
    }
    return false
}

const isMyNumberEven = isEven(1423);
console.log(isMyNumberEven);

function isOdd(num){
    if (num%2!=0){
        return true
    }
    return false
}

const isMyNumberOdd = isOdd(1423);
console.log(isMyNumberOdd);