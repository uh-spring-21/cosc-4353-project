import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import '../App.css';
import register from './register';
import {Link } from 'react-router-dom';



function Login() {
  const [inputs, setInputs] =  useState({username: "" , password: ""});

  const {username, password} = inputs;

  const onChange = e => 
    setInputs({...inputs, [e.target.name]: e.target.value});
  
  const onSubmitForm = async (e) =>
  {

    e.preventDefault()
    try {
      const body = {username,password}
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers:{"Content-type" : "application/json"},
        body: JSON.stringify(body),
        dataType: 'jsonp'
    });

    const parseRes = await response
    console.log(parseRes)
      
    } catch (err) {
      console.error(err)
    }
  }
    return (
    <div>
      <form onSubmit = {onSubmitForm}>
          <h2>Log In</h2>

          <div>
              <label>Username:</label>
              <input
              type="text"
              name="username"     
              placeholder="username"
              value={username}
              onChange = {e => onChange(e)}
              >

              </input>
          </div>
          <div>
              <label>Password:</label>
              <input
              type="text"
              name="password"     
              placeholder="password"
              value={password}
              onChange = {e => onChange(e)}        
              ></input>
          </div>
            <Link to='/register'>
               Dont have an account?
            </Link>
          <div>
             <input type = "submit" value = "Submit" ></input>
          </div>

      </form>
    </div>
  );
}

export default Login;