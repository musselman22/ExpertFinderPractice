import React from 'react';
import Auth from './Auth';
import Footer from './Footer';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { BiBookReader } from 'react-icons/bi'

const HeaderTwo = () => {

  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Brand href="/">
                <BiBookReader className="navbar-logo" />
            </Navbar.Brand>
            <Navbar.Brand href="/">Expert Finder</Navbar.Brand>
                
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/user-profile">Edit Profile</Nav.Link>
                            <Nav.Link href="/search">Search Profiles</Nav.Link>
                            <Nav.Link href="/endorsements">Endorsements</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                        <Auth />
        </Container>
    </Navbar>
        <Footer />
    </>
  );
};

export default HeaderTwo;