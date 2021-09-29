import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            Go to <Link to="/restaurants">Restaurants</Link>
        </div>
    )
}

export default Home
