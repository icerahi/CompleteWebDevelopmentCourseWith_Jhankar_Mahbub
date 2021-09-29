import logo from './logo.svg';
import './App.css';
import {Button, Rating} from '@mui/material'
import Newspaper from './components/newspaper/Newspaper';
function App() {
  return (
    <div className="App">
      <Button variant="contained">MY Story</Button>
      <Rating name="read-only" value={4} readOnly/>
      <Newspaper/>
    </div>
  );
}

export default App;
