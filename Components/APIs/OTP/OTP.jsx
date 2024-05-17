import React, { useEffect, useState } from 'react';
import './Otp.css';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
function OTP() {
  const [otp, setOtp] = useState('');
  const [error,setError]=useState("")
const navigate=useNavigate()
  const email=localStorage.getItem('email')
  const handleVerify = async () => {
    const response = await fetch("http://localhost:8081/verify", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        otp: otp,
        email: email
      })
    });
  
    try {
      const json = await response.json();
      if (response.ok) {
        console.log(json);
        navigate('/')
      } else {
setError(json.message)
        console.log("error:", json);
      }
    } catch (error) {
      console.log("Error parsing JSON:", error);
    }
  };
  
  useEffect(() => {
    document.body.style.backgroundImage = "url('https://img.freepik.com/premium-vector/premium-style-vetor-seamless-pattern-golden-cross-lines-white-background_182787-498.jpg?w=1480')";
  },[])

  return (
    <div className='par'>
      <div className="App">
        {error.length!==0 ? <p style={{color:"red",fontWeight:"bold"}}>{error}</p>:""}
        <h2>OTP verification</h2>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span> </span>}
          inputType="tel"
          containerStyle={{ display: 'unset' }}
          inputStyle={{ width: "3rem", height: "3.5rem" }}
          renderInput={(props) => <input {...props} className='otp-input' />}
          />
        <div className='btn-container'>
          <button onClick={handleVerify}>Verify OTP</button>
        </div>
      </div>
    </div>
  );
}
export default OTP;