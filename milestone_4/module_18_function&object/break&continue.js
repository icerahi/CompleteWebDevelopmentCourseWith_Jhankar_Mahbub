var i =0;
while (i<15){
    console.log(i);
    if(i==5){
        break;
    }
    i++
}


for (var i =0;i<20;i++){
    console.log(i);
    if(i==8){
        break;
    }
}

var numbers=[3,4,23,2,2,12,43,34,34]
for (var i =0;i<numbers.length;i++){
    var number = numbers[i]
  
    if(number >30){
        break;
    }
    console.log(number);
}

for(var i=0;i<numbers.length;i++){
    var number = numbers[i];
    if(number>30){
        console.log(number,'skip');
        continue;
    }
    console.log(number);
}