import React, {useState} from 'react';

const HookForm = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // const [firstNameError, setFirstNameError] = useState("");

    //preventing the submitted values to being entered in URL
    const handleSubmit = e => {
        e.preventDefault();

        //setting values to default
        setFirstName("");
        // setFirstName(e.target.value);
        // if(e.target.value.length < 1) {
        //     setFirstNameError("First name must be longer than 1 character");
        // }
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

    }

    //these are the paramenters for the form
    return (
        <>
        <form className onSubmit={handleSubmit}>
            <h1>Enter Your Info:</h1>
            <div className="form-group">
                <label>First Name: </label>
                <input 
                    type="text"  className="form-control"
                    name="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            <div className="validations">
                { firstName.length > 1 ? "" : "First name must be at least 1 character" }
            </div>
            </div>
            <div className="form-group">
                <label>Last Name: </label>
                <input 
                    type="text"  className="form-control"
                    name="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            <div className="validations">
                { lastName.length > 2 ? "" : "Last name must be at least 2 character" }
            </div>
            </div>
            <div className="form-group">
                <label>Email: </label>
                <input 
                    type="text"  className="form-control"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            <div className="validations">
                { email.length > 10 ? "" : "Email must be at least 10 character" }
            </div>
            </div>
            <div className="form-group">
                <label>Password: </label>
                <input 
                    type="password"  className="form-control"
                    name="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            <div className="validations">
                { password.length > 8 ? "" : "Password must be at least 8 character" }
            </div>
            </div>
            <div className="form-group">
                <label>Confirm Password: </label>
                <input 
                    type="password"  className="form-control"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            <div className="validations">
                { password.length > 8 ? "" : "Passwords must match!" }
            </div>
            </div>
            <input type="submit" value="Submit Info"/>
        </form>
        <div className="col-5 mx-auto">
            <h2>Form Data:</h2>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
            
        </div>
        </>
    );

}

export default HookForm;