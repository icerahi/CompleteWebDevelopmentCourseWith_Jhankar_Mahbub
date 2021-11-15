import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Appointment from "./pages/appointment/Appointment";
import Login from "./pages/login/Login";
import Register from "./pages/login/register/Register";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./pages/login/privateRoute/PrivateRoute";
import Dashboard from "./pages/dashboard/Dashboard";
function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <PrivateRoute exact path="/appointment">
            {" "}
            <Appointment />{" "}
          </PrivateRoute>
          <PrivateRoute  path="/dashboard">
            {" "}
            <Dashboard />{" "}
          </PrivateRoute>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
