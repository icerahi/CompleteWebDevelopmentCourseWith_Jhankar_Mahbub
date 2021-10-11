import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Login = () => {
    const {user,error,SignInWithGoogle,signInWithGithub}=useAuth()
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={SignInWithGoogle} >Google Sign In</button>
            <br />
            <button onClick={signInWithGithub}>Github SignIn</button>
            <br />
            <Link to='/register'>New User?</Link>
        </div>
    )
}

export default Login
