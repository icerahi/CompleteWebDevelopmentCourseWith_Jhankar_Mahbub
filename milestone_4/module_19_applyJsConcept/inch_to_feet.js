
function inchToFeet(inches){
    return inches/12
}
var inches = 132;
var feet =inchToFeet(inches);
console.log(feet);

var dadiInches = 144;
var feet  =inchToFeet(dadiInches);
console.log(feet);

var naniInches = 156;
var feet = inchToFeet(naniInches);

var nanInches = 168;
var feet = inchToFeet(naniInches);

// mile to km

function mileToKilometer(miles){
    var km = miles*1.60934
    return km
}
var marathon = mileToKilometer(26.2);
console.log('kilometer',marathon);

