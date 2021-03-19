import React from 'react'

const profile = () => {
    return (
        <div>
             <table>

<tr>

    <td>

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
<h2>asdasdas</h2>
        </div>
    )
}

export default profile
