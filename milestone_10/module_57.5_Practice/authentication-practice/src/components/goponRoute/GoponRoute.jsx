import React from 'react'
import useAuth from '../../context/useAuth'

const GoponRoute = () => {
    const {user} = useAuth()
    return (
        <div>
            <h1>Very Secret Gopon Route</h1>
            <p>
                Name:{user.displayName}
            </p>    
             <p>
                Name:{user.email}
            </p>
            <img src={user.photoURL} alt="" />
        </div>
    )
}

export default GoponRoute
