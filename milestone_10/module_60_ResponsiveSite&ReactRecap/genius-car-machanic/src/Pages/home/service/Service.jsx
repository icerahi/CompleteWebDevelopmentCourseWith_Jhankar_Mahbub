import React from 'react'
import './Service.css'
const Service = ({service}) => {
    const {name,price,time,img}=service
    return (
        <div className="service">
            <img className="img-fluid" src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p>Require Time: {time} hour</p>
        </div>
    )
}

export default Service
