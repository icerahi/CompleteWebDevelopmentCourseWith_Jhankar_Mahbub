
// function getFactorial(number){
//     let factorial =1;
//     let i = 1;
//     while (i<=number){
//         factorial *=i
//         i++
//     }
//     return factorial
// }



function getFactorial(number){
    let factorial =1;
    let i = number;
    while(i >= 1){
        factorial *=i
        i--;
    }
    return factorial
}
const myFunction = getFactorial(5)
console.log(myFunction);


//for loop reverse

function getFactorial2(number){
    let factorial = 1;
    for(let i =number;i>=1;i--){
        factorial*=i
    }
    return factorial
}
const blaFunction = getFactorial2(5)
console.log(blaFunction);
