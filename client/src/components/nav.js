import React from 'react';
import '../App.css';
import {Link } from 'react-router-dom';


function Nav() {
    const navStyle = {
        color: 'white'
    }
  return (
    <div>
      <nav>
          <ul className= "nav-links">
              <Link style= {navStyle} to='/login'>
                <li>Login</li>
              </Link>

              <Link style = {navStyle} to ='/register'>
                <li>Register</li>
              </Link>
          </ul>
      </nav>
    </div>
  );
}

export default Nav;
