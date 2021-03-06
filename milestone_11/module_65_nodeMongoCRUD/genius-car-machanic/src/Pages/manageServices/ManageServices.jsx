import { serialize } from 'bson'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const ManageServices = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('https://thawing-hollows-80540.herokuapp.com//services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    const handleDelete=id=>{
        fetch(`https://thawing-hollows-80540.herokuapp.com//services/${id}`,{method:'DELETE'})
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount){
                alert('deleted successfully')
            }
            const remaining = services.filter(service => service._id !==id)
            setServices(remaining)
        })
    }
    return (
        <div>
            <h2>Manage Services</h2>
            {services.map(service => <div key={service._id}>
                <h3>{service.name}</h3>
                <button onClick={()=> handleDelete(service._id)}>Delete</button>
            </div> )}
        </div>
    )
}

export default ManageServices
