

function isLeapYear(year){
    if ((year%4==0) && (year %100 !=0)||(year%400 == 0)){
        return true
    }
    return false
}

var year = isLeapYear(2100);
console.log(year);