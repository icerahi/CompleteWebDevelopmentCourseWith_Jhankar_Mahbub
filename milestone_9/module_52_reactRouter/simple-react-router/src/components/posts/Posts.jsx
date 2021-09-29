import React, { useEffect, useState } from 'react'
import Post from '../post/Post'

const Posts = () => {
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return (
        <div>
            {
                posts.map(post => <Post post={post}/>)
            }
        </div>
    )
}

export default Posts
