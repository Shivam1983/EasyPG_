import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [userType, setUserType] = useState('landlord');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState();
const navigate=useNavigate();
    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response =await fetch("http://localhost:8081/login", {
                body:JSON.stringify({
                    email: email,
                    password: password,
                }),
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                }
            })
            const json=await response.json();
            if (!response.ok) {
                setErrorMessage(json.message);
                console.log(errorMessage)
                // Handle successful login, e.g., save token, redirect to dashboard
                // Redirect to dashboard or another page
            }
            if(response.ok){
                navigate('/')
                console.log(json)
            }
        } catch (error) {
            console.error('Login error:', error);
            setErrorMessage('Login failed. Please try again.');
        }
    };

    return (
        <div className='Login-body'>
            <div className="login-container">
                <div className="image">
                    <a href="https://imgbb.com/"><img src="https://i.ibb.co/Z6wPQXV/Screenshot-2023-12-03-at-4-56-02-PM.png" alt="Screenshot-2023-12-03-at-4-56-02-PM" width="330" /></a>
                </div>
                <h2>Welcome Back!</h2>
                <h4>Select User type</h4>
                <select className="user-type-select" id="userType" value={userType} onChange={handleUserTypeChange}>
                    <option value="landlord">Owner</option>
                    <option value="tenant">Tenant</option>
                </select>
                <div className={`user-section ${userType === 'landlord' ? 'active' : ''}`} id="landlordSection">
                    <h2>Owner Login</h2>
                    <form className='login-form' onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="landlordEmail">Email address</label>
                            <input type="email" id="landlordEmail" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div>
        
                            <label htmlFor="landlordPassword">Password</label>
                            <input type="password" id="landlordPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        {errorMessage? <p className="error-message" style={{color:"red",fontWeight:"bold"}}>{errorMessage}</p>:null}
                        <button className="bubbly-button login-button" type="submit">Login as Owner</button>
                    </form>
                    <p>New on EasyPG <a href="">Sign Up</a></p>
                </div>
                <div className={`user-section ${userType === 'tenant' ? 'active' : ''}`} id="tenantSection">
                    <h2>Tenant Login</h2>
                    <form className='login-form' onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="tenantEmail">Email address</label>
                            <input type="email" id="tenantEmail" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div>
                            <label htmlFor="tenantPassword">Password</label>
                            <input type="password" id="tenantPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <button className="bubbly-button login-button" type="submit">Login as Tenant</button>
                    </form>
                    <p>New on EasyPG <a href="http://127.0.0.1:5500/signupeasypg.html">Sign Up</a></p>
                </div>
            </div>
        </div>
    );
}

export default Login;
