const business = 250;
const minister = 350;
const army = 600;
// approach 1
// if (business>minister){
//     console.log('Business person er pola is bigger');
// }
// else{
//     console.log('Minister er pola is bigger');
// }


//compare 3
/*if (business>minister && business>army){
    console.log('Business is bigger');
}
else if(minister>business && minister>army ){
    console.log('Minister is bigger');
}
else{
    console.log('Army is bigger');
}*/

// approach 3 
var max = Math.max(business,minister,army)
console.log(max);

function findLargest(first,second){
    return Math.max(first,second)
}
console.log(findLargest(5,6));

// Task 1: find the largest number from 3 number using function 

// approach 1
function FindLarge(a,b,c){
    if (a>b && a>c){
        return 'a is larger'
    }
    else if(b>a && b>c){
        return 'b is larger'
    }
    else{
        return 'c is larger'
    }
}
console.log(FindLarge(120,88,99));


// approach 2
function findLarge2(a,b,c){
    let max = Math.max(a,b,c)
    if (a==max){
        return 'a is larger'
    }
    else if(b==max){
        return 'b is larger'
    }
    else{
        return 'c is larger'
    }
}
console.log(findLarge2(120,88,99));

// Task 2: find the smallest number from 3 number using function 

// approach 1
function FindSmall(a,b,c){
    if (a<b && a<c){
        return 'a is smaller'
    }
    else if(b<a && b<c){
        return 'b is smaller'
    }
    else{
        return 'c is smaller'
    }
}
console.log(FindSmall(120,88,99));

// approach 2
function FindSmall2(a,b,c){
    let min = Math.min(a,b,c)
    if (a==min){
        return 'a is smaller'
    }
    else if(b==min){
        return 'b is smaller'
    }
    else{
        return 'c is smaller'
    }
}
console.log(FindSmall2(120,88,99));
