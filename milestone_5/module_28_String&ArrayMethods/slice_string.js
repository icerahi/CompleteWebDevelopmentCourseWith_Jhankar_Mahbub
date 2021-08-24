const anthem = 'Amar Sonar Bangla Ami Tomai Bhalobashi';

//split
const words = anthem.split(' ');
const withoutA = anthem.split('a')
// console.log(withoutA);

// slice
const smallSlice = anthem.slice(5,13)
// console.log(smallSlice);

// substr 
const anotherPart = anthem.substr(5,7)
console.log(anotherPart);

//substring
const anotherAnotherPart = anthem.substring(11,15)
console.log(anotherAnotherPart);

// concat,+
const first = 'amader';
const second = 'City';
// console.log(first+second);
console.log(first.concat(second).concat('abc').concat("BlaBla"));
 
const words2 = ['alim','badhon','cameron','david'];
// const allJoined = words2.join('')
// const allJoined = words2.join(' ')
// const allJoined = words2.join(',')
// const allJoined = words2.join(', ')
const allJoined = words2.join('WWW ')
console.log(allJoined);