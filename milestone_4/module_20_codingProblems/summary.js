const number = 1.234;
//Math.floot
// Math.ceil 
// Math.round 

//Math.random

const selected = []
for (let i=0;i<10;i++){
    const random = Math.random()*100;
    const picked = Math.round(random);
    if(selected.indexOf(picked) == -1){
        selected.push(picked)
    }
    else{
        console.log('found duplicted',selected,picked);
    }
}
console.log(selected);
