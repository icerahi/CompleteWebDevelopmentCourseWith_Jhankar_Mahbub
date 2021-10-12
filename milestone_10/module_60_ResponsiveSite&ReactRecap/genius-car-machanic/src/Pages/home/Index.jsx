import React from 'react'
import Banner from './banner/Banner'
import Experts from './experts/Experts'
import Services from './services/Services'

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Experts/>
        </div>
    )
}

export default Home
