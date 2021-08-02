//1.variable
var favouriteBook = "Subtle of art can't give you a fuck";
//2.array
var bookList = ['positioning','start with why','shoe dog','hocked']
var shoeDogIndex= bookList.indexOf('shoe dog')
bookList[1] = 'Story Brand'

bookList.push('Small Giants')
bookList.pop()

//3conditionals
if(bookList[1] == 'hocked'){
    console.log('I am hooked');
}
else{
    console.log("I'm not hooked");
}

//4.LOOP 
//while loop
var i = 0;
while (i<bookList.length){
    console.log(i);
    console.log('looping')
    i++
}

// for loop

for(var i =0;i<bookList.length;i++){
    console.log(i);
}