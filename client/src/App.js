import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/nav';
import login from './components/login';
import register from './components/register';
import fuelQuote from './components/fuelQuote';
import orderHistory from './components/orderHistory';
function App() {
  return (
  <Router>
    <div className="App">
    
      <Nav />
        <Route path='/login' component={login}/>
        <Route path='/register' component={register}/>
        <Route path='/fuelquote' component={fuelQuote}/>
        <Route path='/orderHistory' component={orderHistory}/>
    </div>
  </Router>
  );
}

export default App;
