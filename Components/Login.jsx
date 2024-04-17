import React, { useState } from 'react';
import './Login.css';

function Login() {
    const [userType, setUserType] = useState('landlord');

    const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
    };

    const setActiveUserSection = (id) => {
        document.querySelectorAll('.user-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(id).classList.add('active');
    };

    const handleUserTypeSelect = () => {
        const userType = document.getElementById('userType').value;
        document.querySelectorAll('.user-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(userType + 'Section').classList.add('active');
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
                    <form className='login-form'>
                        <div>
                            <label htmlFor="landlordEmail">Email address</label>
                            <input type="email" id="landlordEmail" placeholder="Enter email" />
                        </div>
                        <div>
                            <label htmlFor="landlordPassword">Password</label>
                            <input type="password" id="landlordPassword" placeholder="Password" />
                        </div>
                        <button className="bubbly-button login-button" type="submit">Login as Owner</button>
                    </form >
                    <p>New on EasyPG <a href="">Sign Up</a></p>
                </div>
                <div className={`user-section ${userType === 'tenant' ? 'active' : ''}`} id="tenantSection">
                    <h2>Tenant Login</h2>
                    <form className='login-form'>
                        <div>
                            <label htmlFor="tenantEmail">Email address</label>
                            <input type="email" id="tenantEmail" placeholder="Enter email" />
                        </div>
                        <div>
                            <label htmlFor="tenantPassword">Password</label>
                            <input type="password" id="tenantPassword" placeholder="Password" />
                        </div>
                        <button className="bubbly-button login-button" type="submit">Login as Tenant</button>
                    </form>
                    <p>New on EasyPG <a href="http://127.0.0.1:5500/signupeasypg.html">Sign Up</a></p>
                </div>
            </div>
        </div>
    );
}

export default Login;



// import React, { useState } from 'react';
// import './Login.css';

// function Login() {
//     const [userType, setUserType] = useState('landlord');

//     const handleUserTypeChange = (event) => {
//         setUserType(event.target.value);
//     };

//     const setActiveUserSection = (id) => {
//         document.querySelectorAll('.user-section').forEach(section => {
//             section.classList.remove('active');
//         });
//         document.getElementById(id).classList.add('active');
//     };

//     const handleUserTypeSelect = () => {
//         const userType = document.getElementById('userType').value;
//         document.querySelectorAll('.user-section').forEach(section => {
//             section.classList.remove('active');
//         });
//         document.getElementById(userType + 'Section').classList.add('active');
//     };

//     return (
//         <div>
           

//             <div className="login-container">
//                 <div className="image">
//                     <a href="https://imgbb.com/"><img src="https://i.ibb.co/Z6wPQXV/Screenshot-2023-12-03-at-4-56-02-PM.png" alt="Screenshot-2023-12-03-at-4-56-02-PM" width="330" /></a>
//                 </div>
//                 <h2>Welcome Back!</h2>
//                 <h4>Select User type</h4>
//                 <select className="user-type-select" id="userType" onChange={handleUserTypeChange}>
//                     <option value="landlord">Owner</option>
//                     <option value="tenant">Tenant</option>
//                 </select>
//                 <div className={`user-section ${userType === 'landlord' ? 'active' : ''}`} id="landlordSection">
//                     <h2>Owner Login</h2>
//                     <form>
//                         <div>
//                             <label htmlFor="landlordEmail">Email address</label>
//                             <input type="email" id="landlordEmail" placeholder="Enter email" />
//                         </div>
//                         <div>
//                             <label htmlFor="landlordPassword">Password</label>
//                             <input type="password" id="landlordPassword" placeholder="Password" />
//                         </div>
//                         <button className="bubbly-button login-button" type="submit">Login as Owner</button>
//                     </form>
//                     <p>New on EasyPG <a href="">Sign Up</a></p>
//                 </div>
//                 <div className={`user-section ${userType === 'tenant' ? 'active' : ''}`} id="tenantSection">
//                     <h2>Tenant Login</h2>
//                     <form>
//                         <div>
//                             <label htmlFor="tenantEmail">Email address</label>
//                             <input type="email" id="tenantEmail" placeholder="Enter email" />
//                         </div>
//                         <div>
//                             <label htmlFor="tenantPassword">Password</label>
//                             <input type="password" id="tenantPassword" placeholder="Password" />
//                         </div>
//                         <button className="bubbly-button login-button" type="submit">Login as Tenant</button>
//                     </form>
//                     <p>New on EasyPG <a href="http://127.0.0.1:5500/signupeasypg.html">Sign Up</a></p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Login;
