import React, {useState} from 'react';
import '../App.css';



const Register = ()=> {
  const [inputs, setInputs] =  useState({username: "" , password: ""});

  const {username, password} = inputs;

  const onChange = e => 
    setInputs({...inputs, [e.target.name]: e.target.value});
    const onSubmitForm = async (e) =>
    {
  
      e.preventDefault()
      try {
       
        const body = {username,password};
        const response = await fetch("http://localhost:5000/auth/register", {
          method: "POST",
          headers:{"Content-type" : "application/json"},
          body: JSON.stringify(body),
          dataType: 'jsonp'
      });
      alert('User has been created!');
      const parseRes = await response
      console.log(parseRes)
        
      } catch (err) {
        console.error(err)
      }
    }



  return (
    <div>
        <form onSubmit = {onSubmitForm}>
          <h2>Register</h2>

          <div>
              <label>Username</label>
              <input
              type="text"
              name="username"     
              placeholder="username"
              value={username}
              onChange = {e => onChange(e)}
              />

              
          </div>
          <div>
              <label>Password</label>
              <input
              type="text"
              name="password"     
              placeholder="password"
              value={password}
              onChange = {e => onChange(e)}              
              ></input>
          </div>
          <div>
            <input type = "submit" value = "Submit" ></input>
          </div>
      </form>
    </div>
  );
}

export default Register;
