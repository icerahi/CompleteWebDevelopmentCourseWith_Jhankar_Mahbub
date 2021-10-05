import React, { useContext } from 'react'
import { SpecialContext } from '../../App'

const Special = () => {
    const [special,house]=useContext(SpecialContext)
    return (
        <div>
            <p>Special:{special}</p>
            <small>House:{house}</small>
        </div>
    )
}

export default Special
