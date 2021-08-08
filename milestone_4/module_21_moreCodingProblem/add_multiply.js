/* 
chairWood = 3cft
tableWook = 10cft
bedWook = 50cft 
*/
function woodCalculator(chairQuantity,tableQuantity,bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood   = 50;

    // wood calculation
    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;
    
    const totalWood = chairWoodQuantity+tableWoodQuantity+bedWoodQuantity
    return totalWood;

}
console.log(woodCalculator(1,2,1));