import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Todos/>
      <hr />

      <Mobile/>
      <hr />
      
      <h1>Our latest Blogs</h1>
      <hr />
      <Blog heading="New heading 1" author="Imran hasan"/>
      <Blog heading="New heading 2" author="Imran rhi"/>
      <Blog heading="New heading 3" author="Imran kahn" />
    </div>
  );
}

const Blog = ({heading,author}) => {
  const titleStyle = {
    color: "steelblue",
    textDecoration: "underline",
    fontWeight: 700,
  };
  return (
    <article class="blog">
      <h2 style={titleStyle}>{heading}</h2>
      <small>Author: <strong>{author}</strong> </small>
      <p style={{fontWeight:400,color:'black'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
        dignissimos, provident nulla vero impedit minima culpa aut illo
        voluptatem eveniet doloremque suscipit error harum pariatur omnis
        deserunt natus alias? Dolores.
      </p>
    </article>
  );
};

const Mobile =()=>{
  const [charge,setCharge]=useState(100)
  const handleBatteryDown=()=>{
    charge >0 && setCharge(charge-10)
  }
  return(
    <div>
      <h1>{charge}%</h1>
      <button onClick={handleBatteryDown}>Battery Down</button>
    </div>
  )
}

const Todos=()=>{
  const [todos, setTodos] = useState([])
  useEffect(async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await res.json()
    setTodos(data)
  },[])

  const todoListStyle={
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gridGap:'10px',
    margin:20

  }
  return (
  <div style={todoListStyle}>
    <h1>Todo list</h1>
      {
        todos.slice(0,10).map(todo=> <Todo title={todo.title} completed={todo.completed} />)
      }
  </div>
  )
}
const Todo=(props)=>{
  return (
    <div style={{border:'1px solid black',borderRadius:20}}>
      <h2>{props.title}</h2>
      <p>completed: {props.completed.toString()} </p>
    </div>
  )
}

export default App;
