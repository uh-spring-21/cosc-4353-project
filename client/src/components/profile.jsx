import React, {useContext, useEffect, useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";
const Profile = () => {

    let history = useHistory();
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [street, setStreet] = useState("");
    const [street2, setStreet2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");
    // useEffect(() =>{
    //     const fetchData = async() => {
            
    //         axios.get(`http://localhost:5050/clientInformation/${userID}`,
    //         {
                
    //             name,
    //             street,
    //             street2,
    //             city,
    //             state,
    //             zipcode,
                
    //         })
    //         // .then((response) => {
    //         //     let ticket = response;
    //         //     console.log(response);
    //         //     setName(response.results.name);
    //         //     setStreet(response.data.data.getticket.street);
    //         //     setStreet2(response.data.data.getticket.street2);
    //         //     setCity(response.data.data.getticket.city);
    //         //     setState(response.data.data.getticket.state);
    //         //     setZipcode(response.data.data.getticket.zipcode);
    
    //         // });
    //     };
    //     fetchData();
    // },[]);

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
            
            const response = await axios.post("http://localhost:5050/clientInformation/update",
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
                let ticket = response;
                console.log(response);
            //     setName(response.results.name);
            //     setStreet(response.data.data.getticket.street);
            //     setStreet2(response.data.data.getticket.street2);
            //     setCity(response.data.data.getticket.city);
            //     setState(response.data.data.getticket.state);
            //     setZipcode(response.data.data.getticket.zipcode);
            
        });
        history.push(`/`)
};
const handleSubmit1 = async (e) => {

        
//         const response = await axios.get("http://localhost:5050/clientInformation/profileget",
//         {

//             username,
//             name,
//             street,
//             street2,
//             city,
//             state,
//             zipcode,


            
//         }).then((response) => {
//             console.log(response);
//             setName(response.results.name);
//         //     setStreet(response.data.data.getticket.street);
//         //     setStreet2(response.data.data.getticket.street2);
//         //     setCity(response.data.data.getticket.city);
//         //     setState(response.data.data.getticket.state);
//         //     setZipcode(response.data.data.getticket.zipcode);

// });
history.push(`/profilerequest`)
};
    return (
        <div>
             {/* <table>
<tr>
    <td>
    <div>
<label class="required" for="username">username</label>
<ul>
<li><input type="text" value={username} name="username" id="username" required onChange = {(e) => setUsername(e.target.value)}/></li>
</ul>
</div>

        <div>

        <label class="required" for="name">Full Name:</label>
        <ul>
        <li><input type="text" name="name" id="name" value={name} required onChange = {(e) => setName(e.target.value)}/></li>
    </ul>
        </div>

    </td>

</tr>

<tr>

    <td>

        <div align="left">

            <label class="required" for="address">Address:</label>
            <ul>
            <li><input  type="text" name="street" id="street" value={street} onChange = {(e) => setStreet(e.target.value)}/></li>
            <li><input  type="text" name="street2" id="street2" placeholder="street2" value={street2} required onChange = {(e) => setStreet2(e.target.value)} /></li>
            <li><input  type="text" name="city" id="city" placeholder="Houston" value={city} required onChange = {(e) => setCity(e.target.value)}/></li>
            <li><input  type="text" name="state" id="state" placeholder="Texas" value={state} required onChange = {(e) => setState(e.target.value)}/></li>
            <li><input  type="number" name="zipcode" id="zipcode" placeholder="77077"  value={zipcode} required onChange = {(e) => setZipcode(e.target.value)}/></li>
            <div><button onClick={handleSubmit} class="button" type="submit" >Update</button></div>

    </ul>
    </div>

    </td>

</tr>


</table> */}
        <div className="mb-4">
            <form action="">
                    <div className="col">
                        <div className="text">ENTER THESE FIELDS IF YOU ARE HERE FOR THE FIRST TIME</div>
                    </div>
                    <div className="col"><label htmlFor="book_ref">your username <small></small></label>
                        <input disabled value={username} type="text" className="form-control" />
                    
                    </div>
                    <div className="col"><label htmlFor="book_ref">Your full name<small></small></label>
                        <input value={name} onChange = {(e) => setName(e.target.value)} type="text" className="form-control" placeholder="Please Enter your full name"/>
                    
                    </div>
                    <div className="col"><label htmlFor="book_ref">Your street<small></small></label>
                        <input value={street} onChange = {(e) => setStreet(e.target.value)} type="text" className="form-control" placeholder="Please Enter your street"/>
                    
                    </div>
                    <div className="col"><label htmlFor="book_ref">street 2<small></small></label>
                        <input value={street2}  className ="form-control" type="text" onChange = {(e) => setStreet2(e.target.value)}/>
                    </div>
                    <div className="col"><label htmlFor="book_ref">city</label>
                        <input value={city}  className ="form-control" type="text" onChange = {(e) => setCity(e.target.value)}/>
                    </div>
                    <div className="col"><label htmlFor="book_ref">state</label>
                        <input value={state}  className ="form-control" type="text" onChange = {(e) => setState(e.target.value)}/>
                    </div>                    <div className="col"><label htmlFor="book_ref">zipcode</label>
                        <input value={zipcode}  className ="form-control" type="number" onChange = {(e) => setZipcode(e.target.value)}/>
                    </div>
                    <div className="col">
                    <button onClick={handleSubmit} type="submit" className="btn btn-primary">Complete</button>
                    </div>
                    <div className="col">
                    <button onClick={handleSubmit1} type="submit" className="btn btn-primary">click here to edit changes</button>
                    </div>
                    
            </form>
        </div>
        </div>
    )
}

export default Profile
