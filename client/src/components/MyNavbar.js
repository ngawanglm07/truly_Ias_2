// src/components/MyNavbar.js
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaHome, FaSignInAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink to="/" className="navbar-brand">
          <FaHome /> My App
        </NavLink>
        <Nav className="ml-auto">
          <NavLink to="/login" className="nav-link">
            <FaSignInAlt /> Login
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
