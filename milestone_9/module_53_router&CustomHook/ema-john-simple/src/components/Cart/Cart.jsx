import React from 'react'
import './Cart.css'
const Cart = (props) => {
    // const totalPrice = cart.reduce((prev,current)=> prev+current.price,0)
    // let totalQuantity = cart.reduce((prev,current)=>prev+current.quantity,0)
    const {cart} = props
    let totalQuantity = 0;
    let totalPrice = 0;
    for(const product of cart){
        console.log(product);
        if (!product.quantity){
            product.quantity=1
        }
        totalPrice = totalPrice + product.price *product.quantity
        totalQuantity = totalQuantity + product.quantity
    }
    const shipping=totalPrice>0?15:0;
    const tax = (totalPrice + shipping)*0.10
    const grandTotal = totalPrice+shipping+tax;

    return (
        <div>
                <h3>Order Summary</h3>
                <h5>Items Ordered:{totalQuantity} </h5>
                <br />
                <p>Total : {totalPrice.toFixed(2)}</p>
                <p>Shipping : {shipping}</p>
                <p>Tax : {tax.toFixed(2)}</p>
                <hr />
                <p>Grand Total: {grandTotal.toFixed(2)}</p>
                {props.children}
        </div>
    )
}

export default Cart
