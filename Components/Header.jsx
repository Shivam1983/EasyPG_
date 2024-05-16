import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import "./Header.css";
function Header() {
  return (
    <Navbar  className="header-nav" bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src="https://i.ibb.co/34zb5Ch/EP-3.png" alt="EP-1" width="100" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="navbar-nav">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/search">Search For PG</Nav.Link>
            <Nav.Link as={Link} to="/addpg">Add Your PG</Nav.Link>
            <Nav.Link as={Link} to="/signup">Create Your Account</Nav.Link>
            <Nav.Link as={Link} to="/login">Log In</Nav.Link>
            <Nav.Link as={Link} to="/AboutUs">About Us</Nav.Link>
            <Nav.Link as={Link} to="/reachus">Reach Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
