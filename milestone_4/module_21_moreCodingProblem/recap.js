function LargestElement(numbers){
    let max =numbers[0]; //
    for(let i=0;i<numbers.length;i++){
        let element = numbers[i];
        if(element > max){
            max = element;
        }
    }
    return max
}
console.log();



function LargestElement(numbers){
    let max =numbers[0]; //
    
    for(const num of numbers){
        if(num > max){
            max=num;
        }
    }
    return max
}
console.log(LargestElement([23,23,55,33]));