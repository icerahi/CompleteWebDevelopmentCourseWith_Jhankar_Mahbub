import React, { useState } from 'react'
import Product from '../Product/Product'
import './Cart.css'

const Cart = ({cart}) => {
    
    const totalPrice=cart.reduce((prev,product)=> prev+product.price,0)
    const shipping=15
    const tax = (totalPrice+shipping)*10
    const grandTotal = totalPrice+tax+shipping
    return (
        <div>
            <h1>Order Summary</h1>
 
                <h3>Order Summary</h3>
                <h5>Items Ordered:{cart.length} </h5>
                <br />
                <p>Total : {totalPrice.toFixed(2)}</p>
                <p>Shipping : {shipping}</p>
                <p>Tax : {tax.toFixed(2)}</p>
                <hr />
                <p>Grand Total: {grandTotal.toFixed(2)}</p>
        </div>
    )
}

export default Cart
