const phones =[
    { name:'sumgsung s5',price:45000,camera:10,storage:32},
    { name:'walton s5',price:5000,camera:10,storage:32},
    { name:'shomi s5',price:17000,camera:10,storage:32},
    { name:'nokia s5',price:4000,camera:10,storage:32},
]

let cheapest = phones[0];
for(const phone of phones){
    //compare price only
    if(phone.price < cheapest.price){
        cheapest =phone;
    }
}
console.log(cheapest);


function CheapestPhone(phones){
    let cheapest = phones[0]
    for(const phone of phones){
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}
console.log(CheapestPhone(phones));