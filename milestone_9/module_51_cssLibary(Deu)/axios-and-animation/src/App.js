import logo from './logo.svg';
import './App.css';
import {useSpring,animated} from 'react-spring'
import { useState } from 'react';
function App() {
  const [flip,setFlip]=useState(false)
  return (
    <div className="App">
      <animated.div style={useSpring({
        to:{opacity:1},
        reset:true,
        reverse:flip,
        delay:200,
        from:{opacity:0},
        onReset:()=>setFlip(!flip),
        })}>I'm Junior</animated.div>
    </div>
  );
}

export default App;
