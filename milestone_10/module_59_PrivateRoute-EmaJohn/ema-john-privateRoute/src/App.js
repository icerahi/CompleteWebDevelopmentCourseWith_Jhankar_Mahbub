import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/login/Login";
import NotFound from "./components/NotFound/NotFound";
import OrderReview from "./components/OrderReview/OrderReview";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Register from "./components/register/Register";
import Shipping from "./components/shipping/Shipping";
import Shop from "./components/Shop/Shop";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <OrderReview></OrderReview>
          </Route>
          <PrivateRoute path="/inventory">
            <Inventory></Inventory>
          </PrivateRoute>
          <PrivateRoute path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>{" "}
          <PrivateRoute path="/shipping">
            <Shipping></Shipping>
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
