import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  return (
    <div className="App">
      <Counter />
      <ExternalUsers />
    </div>
  );
};

const ExternalUsers = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setUsers(data);
  }, []);
  
  return (
    <div>
      <h3>External Users</h3>
      {users.map((user) => (
        <User name={user?.name} email={user?.email} />
      ))}
    </div>
  );
};
const User = ({name,email}) => {
  return (
    <div className="person">
      <h2>Name: {name}</h2>
      <h2>Email: {email}</h2>
    </div>
  );
};
const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => count > 0 && setCount(count - 1);
  return (
    <div>
      <h1>Count:{count} </h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};

/* function App() {
  const number = 5555;
  const singer = {
    name: "DR mahjuf",
    job: "singer",
  };

  const singerStyle = {
    backgroundColor: "red",
    color: "white",
  };
  const nayoks = ['Arifin Shuvo','Bapppi','Rubels',"Bapparaz",'Koober']
  const cinemas=[
    {nayok:"Shuvo",naika:"mim"},
    {nayok:"kuber",naika:'kopila'},
    {nayok:"rubel",naika:'mouri'},
    {nayok:"bappi",naika:'mahi'},
  ]
  return (
    <div className="App">
 

      {
        cinemas.map(cinema=> <Cinema nayok={cinema.nayok} naika={cinema.naika} /> )
      }

    </div>
  );
}
 */
// const Person=({name,profession})=>{
//   const person={
//     backgroundColor:'skyblue',
//     border:'3px solid lightgray',
//     margin:'20px',
//     borderRadius:'20px',
//   }
//   return(
//     <div style={person} /* className="person" */ >
//       <h1>{name}</h1>
//       <h3>{profession}</h3>
//     </div>
//   )
// }

/* const Cinema=(props)=>{
  return(
    <div className="person">
      <h2>Nayok:{props.nayok}</h2>
      <h2>Naika:{props.naika}</h2>
    </div>
  )
} */
export default App;
