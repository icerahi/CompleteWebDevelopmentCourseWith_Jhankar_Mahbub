import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const nameRef = useRef();
  const emailRef = useRef();
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUser = (e) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const newUser = {name,email};
    //send data to the server
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).then(res => res.json())
    .then(data => {
      console.log(data)
      setUsers([...users,data])
    })
    nameRef.current.value=""
    emailRef.current.value=""
    e.preventDefault();
  };

  return (
    <div className="App">
      <br />
      <form onSubmit={handleAddUser}>
        <input ref={nameRef} type="text" placeholder="name" />
        <input ref={emailRef} type="text" placeholder="email" />
        <input type="submit" value="submit" />
      </form>
      {users?.map((user) => (
        <h2>#{user.name}</h2>
      ))}
    </div>
  );
}

export default App;
