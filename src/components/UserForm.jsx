import React, { useState } from  'react';
    
    
const UserForm = () => {
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const[confirmPassword, setConfirmPassword]=useState('');
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName,lastName, email, password };
        console.log("Welcome", newUser);
    };
    
    return(
    <div>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input  name='firstName'onChange={ (e) => setFirstname(e.target.value) } />
            </div>
  <div>
                <label>Last Name: </label> 
                <input  name='lastName'onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input name='email' onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input name='password' onChange={ (e) => setPassword(e.target.value) } />
            </div>

             <div>
                <label>Confirm Password: </label>
                <input name='confirmPassword' onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>

        </form>
        <div>
            <h1>Your Form data</h1>
            <p>First Name : {firstName}</p>
            <p>Last Name : {lastName}</p>
            <p>email : {email}</p>
            <p>password : {password}</p>
            <p>Confirm Password : {confirmPassword}</p>
        </div>
</div>
    );
};
    
export default UserForm;
