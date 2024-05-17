import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { useHistory } from 'react-router-dom'; 
import "./Signup.css";

function Signup() {
  const [errorMessage, setErrorMessage] = useState(''); 
  const navigate = useNavigate();

  //const history = useHistory(); // Initialize history
  const validatePassword = (password) => {
    if (password.length < 8) {
      setErrorMessage('Password is too short. Minimum 8 characters required.');
      return false;
    }
    return true; 
  };
  const handleRegistration = async (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const dob = document.getElementById('birthday').value;
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('cpassword').value;
    if (!name || !dob || !gender || !email || !phone) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }
    if (!validatePassword(password)) { 
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }
    try {
      localStorage.setItem('email', email);
      const response = await axios.post('http://localhost:8081/register', {
        name,
        dob,
        gender,
        email,
        phone,
        password
      });

      // Handle successful registration
      console.log('Registration successful:', response.data);
      navigate('/otp');

    } catch (error) {
      // Handle registration error
      console.error('Registration error:', error.message);
      setErrorMessage('Registration failed. Please try again later.');
    }
  };
    // axios.post('http://localhost:8081/register', {
    //   name,
    //   dob,
    //   gender,
    //   email,
    //   phone,
    //   password,
    // })
    //   .then((response) => {
    //     console.log('Registration successful!', response.data);
    //     //history.push('/otp'); // Navigate to OTP page
    //   })
    //   .catch((error) => {
    //     console.error('Registration error:', error.response);
    //     if (error.response.status === 400) {
    //       setErrorMessage('Email already exists.'); 
    //     } else {
    //       setErrorMessage('Registration failed. Please try again.');
    //     }
    //   });
  
  const handleSubmit = (event) => {
    handleRegistration(event);
  };
  return (
    <div className="signup-container">
      <div className="forest-background"></div>
      <div className="signup-form">
        <p className="already">
          Already on easyPg? <a href="#" className="sign">Sign in</a>
        </p>
        <p className="Name">Sign Up</p>
        <form className="input" onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <br />
          <input type="text" id="name" name="name" required />
          <br />
          <label htmlFor="birthday">DOB </label>
          <input type="date" id="birthday" name="birthday" required />
          <label for="gender">Choose a Gender </label>
          <select id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
          <br />
          <label htmlFor="email">E-mail: </label>
          <br />
          <input type="email" id="email" name="email" required />
          <br />
          <label htmlFor="phone">Phone number: </label>
          <br />
          <input type="tel" id="phone" name="phone" pattern="[1-9]{1}[0-9]{9}" required />
          <br />
          <label htmlFor="password">Password: </label>
          <br />
          <input type="password" id="password" name="password" required />
          <br />
          {errorMessage && <p className="error-message">{errorMessage}</p>} {}
          <label htmlFor="cpassword">Confirm password: </label>
          <br />
          <input type="password" id="cpassword" name="cpassword" required />
          <br />
          <label>
            <input type="checkbox" className="agr" required /> I agree to <a href="#" className="tc">Terms & Conditions</a>
          </label>
          <br />
          <button type="submit" className="submit">Sign Up</button>
          <button type="reset" className="reset">Reset</button>
        </form>
      </div>
    </div>
  );
}
export default Signup;
