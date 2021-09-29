import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom'
import Restaurants from './components/restaurants/Restaurants';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/home/Home';
import NotFound from './components/notfound/NotFound';
import Header from './components/header/Header';
import MealDetail from './components/mealDetail/MealDetail';

function App() {
  return (
     <div className="App">
        <Router>
          <Header/>
          
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path='/restaurants' component={Restaurants}/>
          <Route path='/meal/:mealId' component={MealDetail}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </Router>
     </div>
   
  );
}

export default App;
