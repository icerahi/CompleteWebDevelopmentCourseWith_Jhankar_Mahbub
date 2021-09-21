import React from 'react'
import { addToDb, removeFromdb } from '../../../utilities/fakedb';

const Cosmetic = (props) => {
    const {id,name,price}=props.cosmetic;

    const handlePurchase =(id)=>{
        //set to localstorage
        addToDb(id)
    }
    const handleRemove=(id)=>{
        //remove from local storage
        removeFromdb(id)
    }
    return (
        <div>
            <h2>name : {name}</h2>
            <p>id: {id} Price : {price}</p>
            <button onClick={()=>handlePurchase(id)} >Purchase</button>
            <button onClick={()=>handleRemove(id)} >Remove</button>
        </div>
    )
}

export default Cosmetic
