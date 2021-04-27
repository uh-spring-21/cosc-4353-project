import React, {useContext, useEffect, useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";
const ProfileRequest = () => {
    const {userID} = useParams();
    let history = useHistory();
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
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
    useEffect(()=>{
        getUsername()
    })

    
    const handleSubmit = async (e) => {
        e.preventDefault()
            try{
            const response = await axios.get("http://localhost:5050/clientInformation/profileget",
            {

                    username,
                    name,
                    street,
                    street2,
                    city,
                    state,
                    zipcode,

                
            })
            .then((response) => {

                console.log(response);
                setName(response.data.data.results.name);
                setStreet(response.data.data.results.street);
            //     setStreet2(response.data.data.getticket.street2);
            //     setCity(response.data.data.getticket.city);
            //     setState(response.data.data.getticket.state);
            //     setZipcode(response.data.data.getticket.zipcode);
            
        });
    } catch (err) {

    }
};

    return (
        <div>
            <form action="">

            <div className="box">
                    <form action="">
                <div className="box0">your user id is
                <input type="text" value={username} disabled/>
                </div>
                <div className="box0">name
                <input type="text" value={name} onChange={e => setName(e.target.value)} disabled/>
                </div>
                <div className="box1">
                    <button onClick={( handleSubmit)} className="btn btn-warning">click here for more info</button>
                </div>
                    </form>
                <div className="box2"></div>
            </div>
            </form>
        </div>
    )
}

export default ProfileRequest
