import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    fetch(`http://localhost:5000/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleUpdateUser = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/users/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Updated Successfully");
          setUser({});
        }
      });
  };

  const handleNameChange = (e) => {
    const name = e.target.value;
    // const updatedUser = {name:updatedName,email:user.email}
    const updatedUser = { ...user, name };
    setUser(updatedUser);
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    const updatedUser = { ...user, email };
    setUser(updatedUser);
  };
  return (
    <div>
      <h2>Update :{user.name}</h2>
      <small>email: {user.email}</small>
      <form onSubmit={handleUpdateUser}>
        <input type="text" onChange={handleNameChange} value={user?.name} />
        <input type="email" onChange={handleEmailChange} value={user?.email} />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default UpdateUser;
