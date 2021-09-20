import React from 'react'
import "./Country.css"
const Country = ({country}) => {
    const {name,flag,region,capital,population}=country;
    return (
        <div className="country">
            <h3>Name: {name}</h3> 
            <img height="100" width="200" src={flag} alt="" />                                  
            <p>Region: {region}</p>
            <p>Capital: {capital} population: {population}</p>

        </div>
    )
}

export default Country
