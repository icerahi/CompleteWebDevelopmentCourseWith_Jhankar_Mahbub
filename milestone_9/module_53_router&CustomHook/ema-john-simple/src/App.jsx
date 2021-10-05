import logo from './logo.svg';
import './App.css';
import React from 'react'
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import OrderReview from './components/orderReview/OrderReview';
import Inventory from './components/inventory/Inventory';
import NotFound from './components/notfound/NotFound';
import PlaceOrder from './components/placeorder/PlaceOrder';
const App = () => {
  return (
    <div>
      <Router>
          <Header/>
          <Switch>
            <Route exact path='/' component={Shop}/>
            <Route path='/shop' component={Shop}/>
            <Route path='/review' component={OrderReview}/>
            <Route path='/inventory' component={Inventory}/>
            <Route path='/placeorder' component={PlaceOrder}/>
            <Route path='*' component={NotFound}/>
          </Switch>
     
      </Router>
    </div>
  )
}

export default App

