import React from 'react'
import {Link} from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

import './Header.css'
const Header = () => {
    const {user,logOut} = useAuth()
 
    return (
        <div className="header">
            <Link to='/home'>Home</Link>
            <Link to='/Shipping'>Shipping</Link>
            <Link to='/placeorder'>PlaceOrder</Link>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            <span>{user.displayName}</span>
            {user.accessToken && <button onClick={logOut}>Logout</button>}
        </div>
    )
}

export default Header
