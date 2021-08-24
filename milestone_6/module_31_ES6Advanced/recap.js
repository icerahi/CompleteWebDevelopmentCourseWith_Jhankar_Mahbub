//1.const,let
const hubby = 'Omor sani';
let phone = 'Oppo'
phone = 'Iphone'

//2. default parameter
//5. spread operator
function MaxNumber(array=[]){
    const max = Math.max(...array)
    return max
}
console.log(MaxNumber());
//3.template string
const myNotes = `I'm mojnu of ${hubby}, I have a ${phone}`
console.log(myNotes);

// 4 arrow function
const square = x => x*x 
console.log(square(5));


