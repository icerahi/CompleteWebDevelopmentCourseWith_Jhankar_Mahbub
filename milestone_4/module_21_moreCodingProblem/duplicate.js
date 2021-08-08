const names =['abul','babul','cabul','dabul','ebul','babul','kabul','cabul']

function RemoveDuplicate(arr){
    const unique =[]
    // for(let i =0;i<arr.length;i++){
    //     const element =names[i]
    //     console.log(element);
    // }
    for(const element of arr){
        if (unique.indexOf(element) == -1){
            unique.push(element)
        }
    }
    return unique
}
console.log(RemoveDuplicate(names));