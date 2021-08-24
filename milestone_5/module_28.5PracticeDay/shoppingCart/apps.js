function updateProductQuantity(product,isIncrease,price){
    const productInput = document.getElementById(`${product}_number`)
    let productNumber = parseInt(productInput.value)
    if(isIncrease){
        productNumber+=1
    }
    else if(productNumber >0){
        productNumber-=1
    }
    productInput.value = productNumber

    const productTotal = document.getElementById(`${product}_total`)
    productTotal.innerText = productNumber * price
    
    //calculateTatal
    calculateTotal()
}

function calculateTotal(){
    const phoneTotal = document.getElementById('phone_total').innerText
    const caseTotal = document.getElementById('case_total').innerText
    const subtotal = parseInt(phoneTotal)+ parseInt(caseTotal)
    const tax = subtotal/10
    const total  = subtotal + tax 

    document.getElementById('subtotal').innerText = subtotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
}
document.getElementById('phone_plus').addEventListener('click',function(){
    updateProductQuantity('phone',true,1200)

})

document.getElementById('phone_minus').addEventListener('click',function(){
    updateProductQuantity('phone',false,1200)
})
document.getElementById('case_plus').addEventListener('click',function(){
    updateProductQuantity('case',true,200)
})
document.getElementById('case_minus').addEventListener('click',function(){
    updateProductQuantity('case',false,200)
})

//remove card 

document.getElementById('cart').addEventListener('click',function(event){
    if(event.target.className=="item-remove"){
        event.target.parentNode.parentNode.removeChild(event.target.parentNode)
    }
    
})