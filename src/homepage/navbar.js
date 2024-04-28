import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet } from "react-router-dom";
import './navbar.css';

function NavScrollExample() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 600;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <>
            <Navbar expand="lg" className={`bg-body-tertiary custom_navbar ${scrolled ? 'fixed-top' : ''}`}>
                <Container fluid>
                    <Navbar.Brand className='NavLink' href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav 
                            className="me-auto my-2 my-lg-0 "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className='NavLink' href="/">Home</Nav.Link>
                            <Nav.Link className='NavLink' href="/blogs">Link</Nav.Link>
                            <NavDropdown className='NavDropdownLink'  title="Dropdown" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/secondHome">Action</NavDropdown.Item>
                                <NavDropdown.Item href="/gallary">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="*">Something else here</NavDropdown.Item>
                            </NavDropdown>
                           
                            <Nav.Link className='NavLink' href="/extra">Extra Work</Nav.Link>
                           
                            <Nav.Link className='NavLink' href="#" disabled>
                                About
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex mb-3">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2 "
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Outlet />
        </>
    );
}

export default NavScrollExample;
