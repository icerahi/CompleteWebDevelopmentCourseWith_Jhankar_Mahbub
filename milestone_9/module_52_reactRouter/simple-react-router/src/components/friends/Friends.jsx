import React, { useEffect, useState } from 'react'
import Friend from '../friend/Friend'
import './Friends.css'
const Friends = () => {
    const [friends,setFriends]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])
    return (
        <div>
            <h1>Thisi friends page : {friends.length}</h1>
            <div className="friends-container">
            {
                friends.map(friend => <Friend key={friend.id} friend={friend} />)
            }
            </div>
        </div>
    )
}

export default Friends
