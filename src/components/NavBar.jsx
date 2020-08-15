import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="Navbar">
        <Navbar.Brand href=""> CYF Quote generator</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/randomquotes">Get Random Quote</Nav.Link>
            <Nav.Link href="/searchquotes">Search Quote</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
