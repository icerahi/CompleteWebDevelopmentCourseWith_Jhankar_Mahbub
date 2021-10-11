import React from 'react'
import {Link,useLocation,useHistory} from 'react-router-dom'
import useAuth from '../../context/useAuth'
import './Login.css'
const Login = () => {
    const {signInUsingGoogle} = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/shop'
    
    const handleGoogleLogin=()=>{
        signInUsingGoogle()
        .then((result) => {
            history.push(redirect_uri)
        })
       
    }
    return (
        <div className="login-form">
            <div><h2>Login</h2>
            <form>
                <input type="email" placeholder="Your email" /><br />
                <input type="password" placeholder="" /><br />
                <input type="submit" value="Login"/>
                <p>new to ema-john website? <Link to="/register"> Create Account</Link> </p>
                </form>
                <div>------------or---------</div>
                <button onClick={handleGoogleLogin} className="btn-regular">Google SignIn</button>
                </div>

        </div>
    )
}

export default Login
