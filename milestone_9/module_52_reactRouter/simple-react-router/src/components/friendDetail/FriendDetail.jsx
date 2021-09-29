import React, { useEffect, useState } from 'react'
import { Link, useParams,useHistory } from 'react-router-dom'

const FriendDetail = () => {
    const[friend,setFriend] = useState({})
    const {friendId}=useParams() 
    const history= useHistory()
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])   

    const friendStyle={
        border:'3px solid gray',
        padding:'10px',
        borderRadius:'20px',
        width:'50%',
        margin:'10px auto'

    }

    const handleClick=()=>{
        history.push('/friends')
    }
    return (
        <div style={friendStyle}>
        <h2>I'm : {friend.name}</h2>
        <h5>Call me : {friend.phone}</h5>
        <p>Visit me: {friend.website}</p>
        <p><small>I live in :{friend.address?.city}</small></p>
        
        <button onClick={handleClick}>See All Friends</button>
    </div>
    )
}

export default FriendDetail
