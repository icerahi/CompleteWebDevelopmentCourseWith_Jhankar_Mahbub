//Solution:1
function seerToMon(value) {
    // handling unexpected parameter
    if (typeof value != 'number'){
        return 'Please give a number!!'
    }
    if( value < 0 ){
        return 'Please give a positive number!'
    }

    const result = value / 40;
    return result
}

const s1_test1 = seerToMon(120);
const s1_test2 = seerToMon("blabla 200");
console.log(s1_test1);
console.log(s1_test2);


//Solution:2
function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {

    // handling unexpected parameter
    if(typeof(shirtQuantity+pantQuantity+shoeQuantity) != 'number'){
        return "All products quantity must be a number!"
    }
    if(shirtQuantity<0 || pantQuantity<0 || shoeQuantity <0){
        return "All Product quantity must be a positibe number!"
    }

    const shirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 500;

    const total = (shirtPrice * shirtQuantity) + (pantPrice * pantQuantity) + (shoePrice*shoeQuantity)
    return total
}

const s2_test1 = totalSales(0,1,1)
const s2_test2 = totalSales(0,"not a number",1)
console.log(s2_test1);
console.log(s2_test2);


//Solution: 3
function deliveryCost(quantity){

    // handling unexpected parameter that must be a positive number
    if((typeof quantity != 'number') || (quantity < 0)){
        return 'Quantity must be positive number!'
    }

    costLimit_100= 100;
    costLimit_200= 80;
    constLimitRest= 50;
    // execute when quantity within 100
    if (quantity <=100){
        const total = quantity * costLimit_100;
        return total;
    }
    // execute when quantity within 200
    else if (quantity <=200){
        const costOfFirst100 = 100 * costLimit_100;
        const restQuantity = quantity - 100;
        const costOfRest = costLimit_200 * restQuantity;
        const total = costOfFirst100 + costOfRest;
        return total;
    }
    // execute when quantity over 200
    else{
        const costOfFirst100 = 100 * costLimit_100;  
        const costOfSecond100 = 100 * costLimit_200;
        const restQuantity = quantity - 200;
        const costOfRest = constLimitRest * restQuantity;
        const total = costOfFirst100 + costOfSecond100 + costOfRest;
        return total
    }
}

const s3_test1 = deliveryCost(80)
const s3_test2 = deliveryCost(150)
const s3_test3 = deliveryCost(250)
console.log(s3_test1);
console.log(s3_test2);
console.log(s3_test3);


// Solution:4
function perfectFriend(arr){

    // handling unexpected parameter as parameter must be a array
    if (!Array.isArray(arr)){
        return "input parameter must be a array of friends name"
    }

    // iterating all of items as friendname from array and checking that length
    for(const item of arr){
        if (item.length == 5){
            return item
        }
    }
}
const friendList = ['rahi','imran','ridoy','shifin']
const s4_test = perfectFriend(friendList)
console.log(s4_test);