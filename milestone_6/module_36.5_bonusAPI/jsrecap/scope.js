function PatriChai(age,earning){
    console.log(trueAge);
    var dicision =canMarry(1500)
    console.log(dicision);
    console.log(age);
    console.log(earning);
    const trueAge = age+7;
    // var trueAge = age+7;
    function canMarry(expense){
        const remaining = earning -expense;
        if(remaining > 1000){
            return true
        }
        return false
    }
}
console.log(PatriChai(21,50000));