import logo from "./logo.svg";
import "./App.css";
import GrandFather from "./components/grandFather/GrandFather";
import { createContext, useState } from "react";

export const SpecialContext = createContext("ring");
function App() {
  const [house, setHouse] = useState(5);
  const special = "Tesla Auto Car";
  return (
    <SpecialContext.Provider value={[special,house]}>
      <div className="App">
        <button onClick={() => setHouse(house + 1)}>Buy a new house</button>
        <GrandFather house={house} />
      </div>
    </SpecialContext.Provider>
  );
}

export default App;
