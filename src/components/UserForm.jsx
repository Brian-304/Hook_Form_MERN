import React, { useState } from  'react';
    
// state variables for each inputs with empty strings
const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setconfirmPassword] = useState("");

    
    const createUser = (e) => {
    e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setconfirmPassword(e.target.value) } />
            </div>
            <br />
            <h1>Your Form Data</h1>
            {/* <input type="submit" value="Create User" /> */}
            <div>
                First Name: {(firstname)}
                <br />
                Last Name: {(lastname)}
                <br />
                Email: {(email)}
                <br />
                Password: {(password)}
                <br />
                Confirm Password: {(confirmpassword)}

            </div>
        </form>
    );
};
    
export default UserForm;
