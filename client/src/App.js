import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Nav from './components/nav';
import Login from './components/login';
import Register from './components/register';
import fuelQuote from './components/fuelQuote';
import orderHistory from './components/orderHistory';
import Home from './routes/Home';
import Profile from './components/Profile';
import Dashboard from './components/dashboard';
import profileRequest from './components/ProfileRequest';
function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const setAuth = (boolean) => {setIsAuthenticated(boolean);}; 

  return (
  <Router>
    <div className="App">
    
     
        <Route exact path='/' component={Home}/>
        <Route path='/login' render={props => !isAuthenticated ? <Login {...props} setAuth = {setAuth}/> : <Redirect to = "/dashboard" />} />
        <Route path='/register'  render={props => !isAuthenticated ? <Register {...props} setAuth = {setAuth} /> : <Redirect to = "/dashboard" />} />
        <Route path='/dashboard'  render={props => isAuthenticated ? <Dashboard {...props} setAuth = {setAuth} /> : <Redirect to = "/login" />} />

        <Route path='/fuelquote' component={fuelQuote}/>
        <Route path='/orderHistory' component={orderHistory}/>
        <Route path='/profilerequest' component={profileRequest}/>
        <Route path='/profile' component={Profile}/>
    </div>
  </Router>
  );
}

export default App;
