function welcomeMessage(name,greetHandler){
    console.log(greetHandler);
    greetHandler(name,);
}
const name =['TOm ','Khom',"gds"]
const myObj ={name:"tom cinku",age:11}

function freetMornign(name){
    console.log('GOOD mornging',name);
}

function greetAfternoon(name){
    console.log("GOOD afternon",name);
}
function greetEvening(name){
    console.log("GOOD Eveening",name);
}
welcomeMessage("rahi",freetMornign)
welcomeMessage("sakib",greetAfternoon)
welcomeMessage("Bappa Raj",greetEvening)