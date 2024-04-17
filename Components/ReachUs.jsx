import React from 'react';
import './ReachUs.css';
import Footer from './Footer';

function ReachUs() {
    return (
        <div className='reachus-body'>
            <p className="reachus-head">Reach us</p>
            <div className="reachus-main">
                <div className="reachus-inputin">
                    <p className="reachus-enter">Enter your contact number:</p>
                    <div className="reachus-input">
                        <input type="text" name="number" id="number" required />
                        <label htmlFor="number">Contact number</label>
                    </div>
                    <p className="reachus-enter">Enter your email:</p>
                    <div className="reachus-input">
                        <input type="email" name="email" id="email" required />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="reachus-input">
                        <label htmlFor="problem">Write your concern:</label>
                        <textarea id="problem" name="problem" rows="4" cols="70"></textarea>
                    </div>
                    <button className="reachus-callback">Reach us</button>
                </div>
            </div>  

        </div>
    );
}

export default ReachUs;
