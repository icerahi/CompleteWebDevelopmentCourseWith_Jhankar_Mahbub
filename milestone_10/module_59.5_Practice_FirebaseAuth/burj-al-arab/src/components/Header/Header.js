import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import header from '../../images/header.png';
import logo from '../../images/icons/logo.png';
import useFirebase from '../../hooks/useFirebase';
import useAuth from '../../context/useAuth';

const Header = () => {
    const {user,logOut}=useAuth()
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
            <nav className="nav">
                <ul>
                    <li>
                        <img className="logo" src={logo} alt=""/>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                   
                    <li>
                        <Link className="btn-book" to="/book">Book</Link>
                    </li> 
                    <li>
                        {user?<button onClick={logOut} style={{color:'white'}}>{user.displayName}(logout)</button> : <Link to="/login">Login</Link>}
                    </li>
                 
                </ul>
            </nav>
            <div className="title-container">
                <h1>Burj Al Arab</h1>
                <h2>A global icon of Arabian luxury</h2>
            </div>
        </div>
    );
};

export default Header;