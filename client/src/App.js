import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/nav';
import login from './components/login';
import register from './components/register';

function App() {
  return (
  <Router>
    <div className="App">
    
      <Nav />
        <Route path='/login' component={login}/>
        
        <Route path='/register' component={register}/>


    </div>
  </Router>
  );
}

export default App;
