import React, { useEffect, useState } from 'react'
import { add as addition, multiply, substruction } from '../../utilities/storage'
import Cosmetic from './Cosmetic/Cosmetic'

// const add=addition(10,10)
// const mul=multiply(10,10)
// const sub=substruction(10,10)
const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([])
    useEffect(()=>{
        fetch('./cosmetics.json')
        .then(res=>res.json())
        .then(data => setCosmetics(data))
    },[])
    return (
        <div>
            <h1>Shop my cosmetics!!</h1>
            { cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic} />) }
        </div>
    )
}

export default Cosmetics
