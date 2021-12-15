import React from 'react';
import Link from 'next/link'
const index = ({users}) => {
    //set state
    //useEffect
    return (
        <div>
            <h1>this is users page: {users.length}</h1>
            {users.map((user,index)=> <p key={index}>{user.name} <Link href={`users/${user.id}`}>
                <a>Explore</a></Link> </p> )}
        </div>
    );
};

export default index;

export const getStaticProps=async()=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await res.json()
    return  {
        props:{users}
    }
}