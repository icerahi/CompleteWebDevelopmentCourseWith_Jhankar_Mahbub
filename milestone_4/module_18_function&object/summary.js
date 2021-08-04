//1,variable
var skyColor = 'white';

//2,array
var phones = ['iphone','xiomi','samsung','lg','bla']
phones[3]='walton';

//3.conditions
// check oppo not exists in an arry
if(phones.indexOf('oppo')==-1){
    console.log('opps!amirkhan oppo is missing');
}
//if lg is available
if(phones.indexOf('lg') !=-1){
    console.log('lg is available now');
}

//4,loop
var num =0;
while(num<=10){
    num++;
}

for(var i=0;i<phones.length;i++){

}

//5.function
function addNumbers(num1,num2,num3){
    var total = num1+num2+num3
    return total
}
addNumbers(12,12,12)

//6.object
var microphone={
    brand:'blue yeti',
    price:120,
    color:'black',
}
//// eeraerae //