import React from "react";

const User = ({user}) => {
    const {name,email,phone} = user;
  return (
    <div>
      <h2>User : {name}</h2>
      <p>email: {email}</p>
      <p>phone: {phone}</p>
    </div>
  );
};

export default User;

export const getStaticPaths = async () => {
  //call an external API endpoint to get posts
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await res.json();

  //GEt the paths we want to pre-render based on posts
  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }));
  //we'll pre-render only these paths at build time.
  //{fallback:false} means other routes should 404
  return {
    paths,
    fallback: false,
  };
};

// this is also gets called at build time
export const getStaticProps=async({params})=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await res.json()
    return  {
        props:{user}
    }
}