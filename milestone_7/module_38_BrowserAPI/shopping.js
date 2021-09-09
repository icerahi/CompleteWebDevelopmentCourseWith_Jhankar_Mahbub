const displayLocalStorageCart = () =>{
    const cart = getCart()
    for(const product in cart){
        displayProduct(product)
    }
}

const addItem =()=>{
    const productField = document.getElementById('product_name')
    const name  = productField.value 
    productField.value = "";
    if(!name){
        return
    }
    // display in the ui
    displayProduct(name)
    // add to local storage
    addProductToCart(name)

}

const displayProduct = name =>{
    const ul = document.getElementById('products');
    const li = document.createElement('li')
    li.innerText = name
    ul.appendChild(li)
}

const getCart = () =>{
    const cart = localStorage.getItem('cart')
    let cartObj;
    if(cart){
        cartObj = JSON.parse(cart)
    }
    else{
        cartObj = {};
    }
    return cartObj
}

const addProductToCart = name =>{
    const cart = getCart();
    
    if (cart[name]){
        cart[name] +=1
    }
    else{
        cart[name] =1
    }
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart',cartStringified)
}
displayLocalStorageCart()

const placeOrder=()=>{
    document.getElementById('products').textContent=""
    // localStorage.clear()
    localStorage.removeItem('cart')
}