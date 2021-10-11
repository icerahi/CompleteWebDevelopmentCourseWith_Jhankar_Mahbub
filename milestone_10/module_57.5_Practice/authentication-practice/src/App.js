import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter, Switch, Route,Redirect } from "react-router-dom";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/login/Login";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import AuthProvider from "./context/AuthProvider";
import GoponRoute from "./components/goponRoute/GoponRoute";
import useAuth from "./context/useAuth";

function App() {
  const {user} = useAuth()

  return (

      <BrowserRouter className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/checkout" component={Checkout}/>
           
          <PrivateRoute path="/gopon-route" component={GoponRoute}/>

          <Route path="/login" render={()=> user?<Redirect to="/"/>:<Login/>}/>
           
        </Switch>
      </BrowserRouter>
  
  );
}

export default App;
