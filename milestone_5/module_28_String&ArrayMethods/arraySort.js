const numbers =[6,4,5,6,3,5,6,7,];

const sortedNumbers = numbers.sort()
// console.log(sortedNumbers);

const friends = ['kabli','josim','anwer','dipjol','badsha'];
// const sortedFriends = friends.sort()
// console.log(sortedFriends);
// const reversedFriends = friends.reverse()
// console.log(reversedFriends);

const sortedReversedFriends = friends.sort().reverse()
console.log(sortedReversedFriends);

//number sorting fun
const bigNumbers = [66,58,81,92,9,6,37,13,2];
console.log(bigNumbers.sort(function(a,b){
    return a-b;
}));