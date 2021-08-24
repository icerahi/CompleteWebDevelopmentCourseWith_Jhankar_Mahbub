const numbers = [3, 4, 2, 5, 4, 9, 19, 15, 48, 45, 87];

//slice 4 theke 8 er age porjonto
const numberSliced = numbers.slice(4, 8);
console.log(numberSliced);
console.log(numbers);

//splice to remove an element from an array
const numberspliced = numbers.splice(4, 2);
// console.log(numberspliced);
// console.log(numbers);

// splice to add element,and how many element
const number_Spliced2 = numbers.splice(4, 0,777,999);
console.log(number_Spliced2);
console.log(numbers);