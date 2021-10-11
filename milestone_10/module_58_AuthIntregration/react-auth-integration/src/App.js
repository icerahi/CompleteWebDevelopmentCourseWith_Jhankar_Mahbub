import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import AuthProvider from "./context/AuthProvider";
import Shipping from "./components/shipping/Shipping";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import PlaceOrder from "./components/placeOrder/PlaceOrder";

function App() {
  return (
    <div className="App">
      <AuthProvider> 
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/shipping">
              <Shipping/>
            </PrivateRoute>           
             <PrivateRoute path="/placeorder">
              <PlaceOrder/>
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
