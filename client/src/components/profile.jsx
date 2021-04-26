import React, {useContext, useEffect, useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";
const Profile = () => {

    const {userID} = useParams();
    let history = useHistory();
    const [name, setName] = useState("");
    const [street, setStreet] = useState("");
    const [street2, setStreet2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");
    useEffect(() =>{
        const fetchData = async() => {
            
            axios.get(`http://localhost:5050/clientInformation/${userID}`,
            {
                
                name,
                street,
                street2,
                city,
                state,
                zipcode,
                
            })
            // .then((response) => {
            //     let ticket = response;
            //     console.log(response);
            //     setName(response.results.name);
            //     setStreet(response.data.data.getticket.street);
            //     setStreet2(response.data.data.getticket.street2);
            //     setCity(response.data.data.getticket.city);
            //     setState(response.data.data.getticket.state);
            //     setZipcode(response.data.data.getticket.zipcode);
    
            // });
        };
        fetchData();
    },[]);

    return (
        <div>
             <table>

<tr>

    <td>
    <div>

<label class="required" for="fullName">Username:</label>
<ul>
<li><input type="text" name="username" id="username" required /></li>
</ul>
</div>
        <div>

        <label class="required" for="fullName">Full Name:</label>
        <ul>
        <li><input type="text" name="fullName" id="fullName" required /></li>
    </ul>
        </div>

    </td>

</tr>

<tr>

    <td>

        <div align="left">

            <label class="required" for="address">Address:</label>
            <ul>
            <li><input  type="text" name="street" id="street" placeholder="12345 UH Street" required /></li>
            <li><input  type="text" name="street2" id="street2" placeholder="(Address 2)" required /></li>
            <li><input  type="text" name="city" id="city" placeholder="Houston" required /></li>
            <li><input  type="text" name="state" id="state" placeholder="Texas" required /></li>
            <li><input  type="number" name="zipcode" id="zipcode" placeholder="77077"  required /></li>

    </ul>
    </div>

    </td>

</tr>


<tr>

    <td>

        <div>

            <button class="button" type="submit" >Update</button>

        </div>

    </td>

</tr>

</table>

        </div>
    )
}

export default Profile
