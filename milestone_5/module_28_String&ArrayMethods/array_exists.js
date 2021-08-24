//Array.isArray
function megaFriend(friends){
    if(!Array.isArray(friends)){
        return "please provide an array"
    }
   let mega = friends[0];
   for(const friend of friends ){
       if(friend.length > mega.length){
           mega = friend;
       }
   } 
   return mega;
}
const friends = ['kutub','Lion','Shamol','Sabbir']
const myBigBuddy = megaFriend(123)
console.log(myBigBuddy);

// indexOf 
if(friends.indexOf('Lion') != -1){
    console.log('lion exist');
}

//includes
if(friends.includes('lion')){
    console.log('Lion exists');
}

//concat
const first = [2,3,4,5];
const second = [4,3,2,5];
const combined = first.concat(second)
console.log(combined);