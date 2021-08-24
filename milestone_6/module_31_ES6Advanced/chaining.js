// declare variable based on the name of an object property

const myObject ={x:2,y:50,z:600,a:25,b:65};

const {x,y,z} = myObject;

console.log(z,y,z);

// destructuring array
const [p,q,...s] = [45,37,55,56];
console.log(p,q,s);

const {sky,soil,color} ={sky:'blue',soil:'matti',color:'red'}

//
const company = {
    name: "GP",
    ceo: { id: 1, name: "ajmol", food: "fuska" },
    web: { work: "web developer", employee: 22, framework: "react" },
  };

console.log(company?.ceo?.name);
console.log(company?.backend?.tech) // undefine property