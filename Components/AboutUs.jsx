import React from 'react';
import './AboutUs.css';

function AboutUs() {
    return (
        <div className="main-container-about">
            <section className="about-section">
                <div className="about-content">
                    <img className="about-image" src="https://i.ibb.co/3fwJGZR/Easy-PG-new-photo-layout.png"  alt="About Us" />
                    <div className="about-text">
                        <h2>About Us</h2>
                        <h5>Front-end Developer & <span>Designer</span></h5>
                        <p>Welcome to Easy PG, your go-to platform for hassle-free hostel and PG bookings! We understand that finding the right accommodation is a crucial part of your journey, whether you are a student, a young professional, or someone seeking a comfortable and affordable place to stay. At Easy PG, we strive to make this process seamless, enjoyable, and tailored to your needs!</p>
                        <div className="about-data">
                            <a href="#" className="about-hire">Hire Me</a>
                        </div>
                    </div>
                </div>
            </section>

            
        </div>
        
    );
}

export default AboutUs;
