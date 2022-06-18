
import React from 'react';
import { Navbar, Container, Nav, Image, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../../../images/Logo.png';

const Header = () => {
    return (
        <Navbar bg="info" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            <Image src={Logo} className="img-fluid" alt=""></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink className={({isActive}) => isActive? "active-link" : "link"} to='/'>Home</NavLink>
              <NavLink className={({isActive}) => isActive? "active-link" : "link"} to='./about'>About us</NavLink>
              <NavLink className={({isActive}) => isActive? "active-link" : "link"} to='./products'>Products</NavLink>
              <NavLink className={({isActive}) => isActive? "active-link" : "link"} to='./contact'>Contact</NavLink>
              <NavLink className={({isActive}) => isActive? "active-link" : "link"} to='/login'> Login</NavLink>
              {/* {
                user ?
                <Button className='btn user-control logout-btn'>Log Out</Button>
                :
                <Button className='btn user-control login-btn'>
                  <NavLink className={({isActive}) => isActive? "active-link" : "link"} to='/login'> Login</NavLink>
                </Button>
              } */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;