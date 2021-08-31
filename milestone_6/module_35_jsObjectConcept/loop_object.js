const bottle = {
    color:'yellow',
    hold:'water',
    price:50,
    isCleaned:true,
}

// for(const props in bottle){ //for in use with object
//     console.log(props);
// }

 for(const prop in bottle){
     console.log(prop,bottle[prop]);
 }
//
 const keys = Object.keys(bottle)
 console.log(keys);
 for(const props of keys){
     console.log(props,bottle[props]);
 }

 //advance
 const entries = Object.entries(bottle)

 console.log(entries);
 for(const[key,value] of Object.entries(bottle)){
    console.log(key,value);
 }