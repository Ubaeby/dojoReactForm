import React, { useState } from 'react';

const Form = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    // validations
    const [fnameError, setFnameError] = useState("");
    const [lnameError, setLnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [pwError, setPwError] = useState("");

    const fnameValidator = e => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2 ) {
            setFnameError("First Name must be more than 2 characters")
        } else {
            setFnameError("");
        }
        if (e.target.value.length === 0) {
            setFnameError("");
        }
    }
    const lnameValidator = e => {
        setLastName(e.target.value);
        if (e.target.value.length < 2) {
            setLnameError("Last Name must be more than 2 characters")
        } else {
            setLnameError("");
        }
        if (e.target.value.length === 0) {
            setLnameError("");
        }
    }

    const emailValidator = e => {
        setEmail(e.target.value);
        if (e.target.value.length < 5 ) {
            setEmailError("Field must be at least 5 characters");
        } else {
            setEmailError('');
        }
        if (e.target.value.length === 0) {
            setEmailError("");
        }
    }

    const passwordValidator = e => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPwError("Password must be at least 8 characters")
        }
        else {
            setPwError("");
        }
        if (e.target.value.length === 0) {
            setPwError("");
        }
    }

    const createUser = e => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirm };
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirm("");
    };

    return (
        <div>
            <form onSubmit={ (e) => e.preventDefault() }>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" value={firstName} onChange={ fnameValidator } />
                    { fnameError  ? <p> { fnameError } </p> : '' }
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" value={lastName} onChange={ lnameValidator } />
                    { lnameError ? <p> { lnameError } </p> : ''}
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" value={email} onChange={ emailValidator } />
                    { emailError ? <p> { emailError } </p> : ''}
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" value={password} onChange={ passwordValidator } />
                    { pwError ? <p> { pwError }</p> : ''}
                </div>
                <div>
                    <label htmlFor="confirm">Confirm Password: </label>
                    <input type="password" value={confirm} onChange={ e => setConfirm(e.target.value) } />
                    { password !== confirm ? <p> Password does not match </p> : ""}
                </div>
            </form>

            <div>
                <p>Your Form Data</p>
            </div>

            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirm}</p>    
            </div>
        </div>
    )
};

export default Form;