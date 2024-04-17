// Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header-nav">
            <nav className="navbar navbar-expand-lg navbar">
                <div className="header-logo">
                    <Link className="navbar-brand" to="/">
                        <img src="https://i.ibb.co/34zb5Ch/EP-3.png" alt="EP-1" width="100" />
                    </Link>
                </div>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/search">Search For PG</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/addpg">Add Your PG</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/signup">Create Your Account</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/login">Log In</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/AboutUs">About Us</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/reachus">Reach Us</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;