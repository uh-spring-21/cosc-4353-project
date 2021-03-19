import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/nav';
import login from './components/login';
import register from './components/register';
import fuelQuote from './components/fuelQuote';
import orderHistory from './components/orderHistory';
import Home from './routes/Home';
import profile from './components/profile';

function App() {
  return (
  <Router>
    <div className="App">
    
     
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={login}/>
        <Route path='/register' component={register}/>
        <Route path='/fuelquote' component={fuelQuote}/>
        <Route path='/orderHistory' component={orderHistory}/>
        <Route path='/profile' component={profile}/>
    </div>
  </Router>
  );
}

export default App;
