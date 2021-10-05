import React from 'react'
import Brother from '../brother/Brother'
import MySelf from '../myself/MySelf'
import Sister from '../sister/Sister'

const Father = ({house}) => {
    return (
        <div>
            <h2>Father, house:{house}</h2>
            <div style={{display:'flex'}}>
                <Brother house={house}/>
                <MySelf house={house}/>
                <Sister house={house}/>
            </div>
        </div>
    )
}

export default Father
