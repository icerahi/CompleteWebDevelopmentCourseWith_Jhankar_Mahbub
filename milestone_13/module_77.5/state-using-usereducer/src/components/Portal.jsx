import React, { useReducer, useState } from 'react'
import { portalReducer } from '../reducers/portalReducer'
import { portalState } from '../store/portalStore'

const Portal = () => {
    const [state,dispatch] = useReducer(portalReducer,portalState)
    const [name,setName] = useState('')
    return (
        <div>
            <h2>My Doctors Portals</h2>
            <h3>Has Patients: {state.patients.length}</h3>
            <input type="text" onChange={(e)=> setName(e.target.value)} />
            <button onClick={()=> dispatch({type:'addPatient',name})}>Add</button>
            <br />
            <h3>---------------------------</h3>
            {state.patients.map(patient => <p key={patient.id}>{patient.name} <button onClick={()=> dispatch({type:'removePatient',id:patient.id})}>X</button></p>  )}
        </div>
    )
}

export default Portal
