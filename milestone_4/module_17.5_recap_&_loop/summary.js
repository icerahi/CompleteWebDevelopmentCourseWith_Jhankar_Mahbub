var i = 0;
while (i<7){
    console.log(i);
    i++
}
console.log("Start for");
for (var i = 0; i<7;i++){
    console.log(i);
}

console.log("array loop");
var numbers =[45,45,234,34,23,43,13,54]
for( var i =0;i< numbers.length;i++){
    var element = numbers[i]
    console.log(element);
}
console.log("for each");
numbers.forEach((i)=>{
    console.log(i);
})
console.log(Date());