// 1. show output after 3.5 seconds 
console.log("start")
const show =()=>{
    console.log("showing output")
    console.log('end')
}
setTimeout(show,3500)
// 2. take a number using prompt. add 200 and show it as alert
/* const input = prompt('what is your favourite number?')
alert(parseInt(input)+200) */

//3. Do you want to see the href? if okey then console.log('href')
/* const ask = confirm("Do you want to see the href?")
if(ask){
    console.log('href');
} */
//4. purpose of cookies. 5-7 lines in english
/* >>> A cookie is an amount of information that parsist between
 servier-side and a client side.A web browser store this info at 
 the time of browsing. In genarally a cookie contain the info 
 as string in the form of a name-value pair separte by semi-colons.
 */

 //5. 3 differences between local storage and session storage
/*  >>> session storage keep data temporary,localstorage keep data longtime,
    session storage works untils browser close,
    localstorage has no expiration Date, session storage clean when browser tab is closed */

///Home work:


//6. how javascript run ? 5-7 lines in English.
/* >>> Javascript is an interpreted lanaguage, not a compiled lanague,A program 
such c++ or java need to run it.The source code is passed through a program 
called a compiler, which tanslate it into bytecode that the machine understands and 
can execute. Modern browser use a technology known as Just-In-TimeRanges(JIT) compilation,
which compiles Javascript to executeable bytecode just as it is about run. */

//7.List of things that are asynchronous in JS/browser
// >>> fetch,setTimeout,setInterval

// 8. What is event loop is JS and how does it work?
/* >>> The Event Loop has one simple job — to monitor the Call Stack and
 the Callback Queue. If the Call Stack is empty, the Event Loop will take the
  first event from the queue and will push it to the Call Stack, which effectively runs it. 
  Such an iteration is called a tick in the Event Loop. */

/* optional 
9. simple website with two input field and a buton product name,
    product PromiseRejectionEvent, by lciking on button will add in local storage. 
10. Display products on the WritableStreamDefaultWriter. If they exists on localStorage,display from there */



//optional part
const productName = document.getElementById('product_name')
const productPrice = document.getElementById('product_price')
const productList = document.getElementById('products')
const addProduct=()=>{
    const name = productName.value 
    const price = productPrice.value 
    const li = document.createElement('li')
    li.innerText = `${name} - ${price}`
    productList.appendChild(li)
    addTolocalStorage({name:price})
}

const addTolocalStorage= data =>{
    const products=localStorage.getItem('products')
    if (products){
        const data=JSON.parse(products)
        console.log(data);
        data.push(JSON.stringify(data))
    }
    else{
     localStorage.setItem('products',JSON.stringify('[]'))
    }

   
    

    
}