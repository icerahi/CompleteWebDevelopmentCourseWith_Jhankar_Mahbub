import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';
import Count from './components/Count';
import Portal from './components/Portal';

function App() {
  // const [users, setUsers] = useState([])
  const [state,dispatch]=useReducer()
  return (
    <div className="App">
      <Count/>
      <Portal/>
    </div>
  );
}

export default App;
