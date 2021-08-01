var gotJob = true;
var moneySaved=2250000;
var hasFlat = false
if (gotJob && moneySaved>2000000 && hasFlat){
    console.log("Cholo biya kore feli!")
}
else{
    console.log('tor kopal e biya nai');
}
if ((gotJob && moneySaved>2000000) || hasFlat){
    console.log("Cholo biya kore feli!")
}
else{
    console.log('tor kopal e biya nai');
}