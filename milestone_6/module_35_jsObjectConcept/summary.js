const pen = {
    brand:"Matador",
    price:5,
    writePoem:function(food){
        console.log(food);
    }
}
const keys = Object.keys(pen)
const values = Object.values(pen)
const entries = Object.entries(pen)
for(const props in pen){
    console.log(props,pen[props]);
}

const a = {a:1},
const b ={ a:1},
const c = a ;
if(a==c){
    return true;
}
function compareObject(obj1,obj2){}

const aBounded = pen.writePoem.bind(a);
aBounded()
pen.writePoem.call(a,)
pen.writePoem.apply(a,[])

//this

//arrow function er nijerso this hoy na,bind kore dite hoy,
// this er value execution context e change hoy