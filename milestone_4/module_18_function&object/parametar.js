function bringSingara(taka){
    console.log('singra er jonno dise',taka);
    console.log("mama singara den");
    var singaraPrice =10;
    var singaraQuantity = taka/singaraPrice;
    return singaraQuantity;
}
var money = 240
var singara=bringSingara(money);
console.log("Ai nen singara",singara)