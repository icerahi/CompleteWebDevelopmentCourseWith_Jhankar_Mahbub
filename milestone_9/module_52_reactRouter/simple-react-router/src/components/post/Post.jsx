import React from 'react'
import { Link,useHistory } from 'react-router-dom'

const Post = ({post}) => {
    const {title,id}=post
    const history=useHistory()
    const handleClick=()=>{
        history.push(`/posts/${id}`)
    }
    return (
        <div>
            <h2>{title}</h2>
            <Link to={`/posts/${id}`}>Post Details</Link>
            <button onClick={handleClick}>Click to see details</button>
            <hr />
        </div>
    )
}

export default Post
