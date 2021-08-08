// 1. conversion 
function feetToInch(value){
    return  value/12;
}
console.log(feetToInch(12));

// 2.conversion 
function centimeterToMeter(value){
    return value*0.01;
}
console.log(centimeterToMeter(100));

// 3.calculation
function pageRequirements(book1Q,book2Q,book3Q){
    //book1 has 100pages
    //book2 has 200pages
    //book3 has 300pages
    const book1page =100;
    const book2page =200;
    const book3page =300;

    const totalpages = (book1page*book1Q)+(book2page*book2Q)+(book3page*book3Q)
    return totalpages
}
console.log(pageRequirements(1,1,1));

//4 . friends
function bestFriend(arr){
    let largeName = arr[0];
    for(const name of arr){
        if(name.length > largeName.length){
            largeName=name;
        }
    }
    return largeName
}
console.log(bestFriend(['bangladeuuiiish','rahi','opitiddbiekbar']));

//5 : will stop the loop if the aray has any negative number
//and return all the positibe number before the negatibe number
function onlyPositive(arr){
    let postiveNumbers=[]
    for(const item of arr){
      
        if (item <0){
            break;
        }
        postiveNumbers.push(item)
    }
    return postiveNumbers
}
console.log(onlyPositive([12,32,55,-23,22]));