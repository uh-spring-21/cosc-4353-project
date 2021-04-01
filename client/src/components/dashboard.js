import '../App.css';
import React from 'react';
import Nav from '../components/nav';

const Dashboard = ({setAuth}) => {
   
    const logout = async e => {
        setAuth(false);
        
    } 
    return (
        <div>
            <Nav/>
            <h1>Dashboard</h1>
            <button onClick = {e => logout(e)}>Log out</button>
        </div>
    )
}

export default Dashboard