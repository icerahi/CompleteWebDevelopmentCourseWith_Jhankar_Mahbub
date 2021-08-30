
const favNum = 26;
function add(first,second){
    // console.log(mood); //hoisting
    const result =first+second
    console.log(result);
    console.log(favNum);
  
    if(result >9){
         let mood ='happy';
        // console.log(mood);
    }
    // console.log(mood);
    return result;
}
const sum = add(11,23)

// console.log(mood);
 
for(var i =0;i<10;i++){
    global="rahi"
}
console.log('i',i,global);