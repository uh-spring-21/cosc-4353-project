import React from 'react'

const fuelQuote = () => {
    return (
        <div>
        <h1> Fuel Quote Form</h1><br />

<div>User: Tom Braddy</div>
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
            <input disabled type="text" name="state" id="state" placeholder="Texas"  required />
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

export default fuelQuote
