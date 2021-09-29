import React from 'react'
import { Link,useHistory } from 'react-router-dom'
import Friends from '../friends/Friends'

const Friend = ({friend}) => {
    const {id,name,phone,website,address}= friend
    let history = useHistory()
    const friendStyle={
        border:'3px solid gray',
        padding:'10px',
        borderRadius:'20px',

    }
    const handleFriendClick=()=>{
        history.push(`/friend/${id}`)
    }
    return (
        <div style={friendStyle}>
            <h2>I'm : {name}</h2>
            <h5>Call me : {phone}</h5>
            <p>Visit me: {website}</p>
            <p><small>I live in :{address.city}</small></p>
            <Link to={`/friend/${id}`}> Visit me</Link>
            <br />
            <Link to={`/friend/${id}`}> <button>Visit me</button> </Link>
            <br />
            <button onClick={handleFriendClick}>Visit me 2</button>
        </div>
    )
}

export default Friend
