import React, {useContext, useEffect, useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";
import '../style.css';
const OrderHistory = () => {

    let history = useHistory();
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [gallons_req, setGallons] = useState("");
    const [reqID, setReqID] = useState("");
    const [price, setPrice] = useState("");
    const [total, setTotal] = useState("");
    const [street, setStreet] = useState("");
    const [street2, setStreet2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");

    async function getUsername(){
        try {
            const response = await fetch("http://localhost:5050/dashboard/", {
                method: "GET",
                headers: {token: localStorage.token}
            });
            
            const parseResponse = await response.json()

            setUsername(parseResponse);
            
        } catch (error) {
            console.error(error.message)
            
        }
    }
    async function getInfo(){
        try {
            const body = {username}
            const response = await fetch(`http://localhost:5050/clientInformation/api/profileget/${username}`, {
                method: "GET",
                headers:{"Content-type" : "application/json"},
                // body: JSON.stringify(body),
                dataType: 'jsonp'
            });
            
            const parseResponse = await response.json()
            
            setName(parseResponse.results[0].name);

            
        } catch (error) {
            console.error(error.message)
            
        }
    }

    async function getOrder(){
        try {
            const body = {username}
            const response = await fetch(`http://localhost:5050/order/getorder/${username}`, {
                method: "GET",
                headers:{"Content-type" : "application/json"},
                // body: JSON.stringify(body),
                dataType: 'jsonp'
            });
            
            const parseResponse = await response.json()
            console.log(parseResponse);
            setReqID(parseResponse.results[0].reqID);
            setGallons(parseResponse.results[0].gallons_req);
            setPrice(parseResponse.results[0].price);
            // setCity(parseResponse.results[0].city);
            // setState(parseResponse.results[0].state);
            // setZipcode(parseResponse.results[0].zipcode);
            
        } catch (error) {
            console.error(error.message)
            
        }
    }
    
    useEffect(()=>{
        getUsername()
    })
    useEffect(()=>{
        getInfo()
    })
    useEffect(()=>{
        getOrder()
    })

    return (
        <div>
            <h2>   Order History {username} </h2>
<table class="styled-table">
    <thead>
        <tr>
        	<th>Order ID</th>
            <th>Customer Name</th>
            <th>Gallons Purchased</th>
            <th>Price</th>
            <th>Total Amount</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>{reqID}</td>
            <td>{name}</td>
            <td>{gallons_req}</td>
            <td>{price}</td>
            <td>{total}</td>
        </tr>
                <tr>
            <td>10102</td>
            <td>Tom Brady</td>
            <td>500</td>
            <td>17</td>
            <td>8,500</td>
        </tr>
                <tr>
            <td>10103</td>
            <td>Tom Brady</td>
            <td>800</td>
            <td>15</td>
            <td>12,000</td>
        </tr>
        <tr class="active-row">
            <td>10104</td>
            <td>Tom Brady</td>
            <td>200</td>
            <td>20</td>
            <td>4,000</td>
        </tr>

    </tbody>
</table>
        </div>
    )
}

export default OrderHistory
