console.log('first');
console.log('second');
// setInterval(()=>console.log("Tik tik tik tik"),1000)


let seconds = 0;
const timeId = setInterval(()=>{
    console.log(seconds++)
    // console.log(++seconds)
    seconds>15?clearInterval(timeId):null
},1000)
console.log('third');


