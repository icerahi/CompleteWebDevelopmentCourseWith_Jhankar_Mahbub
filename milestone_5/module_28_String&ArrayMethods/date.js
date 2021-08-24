const myFvDate = new Date('1971-3-26');
// console.log(myFvDate);

const anotherDate= new Date(1971,12,16,11,50,40,80)
console.log(anotherDate);

if (myFvDate.getTime() < anotherDate.getTime()){
    console.log("fav is earlier");
}