import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/home/home/Home";
import Booking from "./Pages/booking/booking/Booking";
import Login from "./Pages/login/login/Index";
import NotFound from "./Pages/notFound/NotFound";
import Header from "./Pages/shared/header/Header";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./Pages/login/privateRoute/PrivateRoute";
import AddService from "./Pages/addService/AddService";
import ManageServices from "./Pages/manageServices/ManageServices";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <PrivateRoute path="/Book/:serviceId" component={Booking} />
            <Route path="/login" component={Login} />
            <Route path="/addService" component={AddService} />
            <Route path="/manageServices" component={ManageServices} />

            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
