function addNumbers(num1,num2){
    console.log(arguments);
    // arguments
    let result = 0;
    for(const num of arguments){
        result +=num
    }
   
    return result 
}

const sum = addNumbers(12,100,13,420,2000)
// console.log(sum);

function getFullName(firstName,lastName){
    let fullName='';
    for(const part of arguments){
        fullName = fullName+' '+part;
    }
     
    return fullName
}
console.log(getFullName('omuk','bin','Hanif','Sonkget','goooo'));