console.log(111111111);
console.log(222222222);
// setTimeout(()=> console.log("aaaaaaaaaaaa"),5000)
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(res => res.json())
.then(data => console.log(data) )
console.log(3333333);
console.log(4444);

for (let i = 0; i < 10000; i++) {
    console.log(i); 
}


// fetch and settimeout work as asynchronus ,don't wait 