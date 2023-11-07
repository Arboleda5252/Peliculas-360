import React from 'react';
import {Navbar, Nav, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const NavbarMain = () => {
  return (
    <>
    <Navbar className='navNg' bg='dark' data-bs-theme="dark" expand='lg'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          <img src="https://i.imgur.com/PHZVZvp.png" alt="logo" width="70" style={{ paddingRight: '10px', fontFamily: 'Arial, sans-serif' }}/>
           Peliculas360
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='lista-comprimida'/>
        <Navbar.Collapse id='lista-comprimida'>
          <Nav className='ms-auto'>
            <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
            <Nav.Link as={Link} to='/info'>Acerca de nosotros</Nav.Link>
            <Nav.Link as={Link} to='/'>Contacto</Nav.Link>
            <Nav.Link as={Link} to='/redSocial'>Redes Sociales</Nav.Link>
            <Nav.Link as={Link} to='/ayuda'>Ayuda</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  );
};

export default NavbarMain;
