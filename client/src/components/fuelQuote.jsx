import React, {useState,useEffect} from 'react';
import '../App.css';

const FuelQuote = () => {
    const [name, setName] =  useState("")

    async function getName(){
        try {
            const response = await fetch("http://localhost:5050/dashboard/", {
                method: "GET",
                headers: {token: localStorage.token}
            });
            
            const parseResponse = await response.json()

            setName(parseResponse);
            
        } catch (error) {
            console.error(error.message)
            
        }
    }
    useEffect(()=>{
        getName()
    })

    return (
        <div>
        <h1> Fuel Quote Form </h1><br />

<div>User: {name}</div>
<div>Logged in</div>
<div>12345 UH Street</div>
<div>Houston</div>
<div>Texas</div>
<div>77077</div>




<table>

    <tr>

        <td>

            <div>

            <label class="required" for="gallons">Gallons Requested:</label>
            <input type="number" name="gallons" id="gallons" required />
            </div>

        </td>

    </tr>

    <tr>

        <td>

            <div>

                <label class="required" for="address">Delivery Address:</label>
            <input disabled type="text" name="street" id="street" placeholder="12345 UH Street" required />
            <input disabled type="text" name="city" id="city" placeholder="Houston"  required />
            <select name="state" id="state" >
                <option value="" selected="selected">Select a State</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
            </select>
            <input disabled type="number" name="zipcode" id="zipcode" placeholder="77077"required />
        </div>

        </td>

    </tr>


    <tr>

        <td>

            <div>

                <label class="required" for="ex_delivery_date">Delivery Date:</label>
            <input type="date" name="ex_delivery_date" id="ex_delivery_date"  required />
        </div>

        </td>

    </tr>


    <tr>

        <td>

            <div>

                <label class="required" for="sug_quote">Suggestion Quote:</label>
            <input type="number" name="sug_quote" id="sug_quote" placeholder="ex:2345"  required /><span>Dollars</span>
        </div>

        </td>

    </tr>

    <tr>

        <td>

            <div>

                <label for="sug_quote">Total Amount Due:</label>
            <input disabled type="number" name="amount_due" id="amount_due" placeholder="Your expected Amount Due Will Display here"  required /><span>Dollars</span>
        </div>

        </td>

    </tr>



    <tr>

        <td>

            <div>

                <button class="button" type="submit" >Submit</button>

            </div>

        </td>

    </tr>

</table>



        </div>
    )
}

export default FuelQuote
