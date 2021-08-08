function largestElement(arr){
    let largest=arr[0];
    for (let i=0;i<arr.length;i++){
        let element = arr[i]
        if (element > largest){
            largest = element
        }
    }
    return largest
}
const ages =[12,32,43,23,70,54,53,52,65]
const minusages =[-12,-32,-43,-23,-70,-54,-53,-52,-65]

console.log(largestElement(minusages));

//Task : find the lowest element of an array

function smallestElement(arr){
    let smallest = arr[0]
    for(let i=0;i<arr.length;i++){
        let element = arr[i]
        if (element<smallest){
            smallest = element;
        }
    }
    return smallest
}
console.log(smallestElement(ages));
console.log(smallestElement(minusages));