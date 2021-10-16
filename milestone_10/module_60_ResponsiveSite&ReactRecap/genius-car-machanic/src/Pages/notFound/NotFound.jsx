import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <img src="https://image.freepik.com/free-vector/traffic-sign-page-404-found-flat-illustration_80328-232.jpg" alt="" />
            <Link to="/">Home</Link>
        </div>
    )
}

export default NotFound
