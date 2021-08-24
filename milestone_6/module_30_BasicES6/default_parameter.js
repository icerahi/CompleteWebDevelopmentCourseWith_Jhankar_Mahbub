function add(num1=0,num2=0){
    //option 2
    // num2 = num2 || 0;
    //option 1 
    // if(num2 === undefined){
    //     num2=0
    // }
    return num1+num2
}

const result= add(17);
console.log(result)


function fullName(first,last="Chowdory"){
    const name = first+' '+last
    return name;
}