import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar,Container,Nav} from 'react-bootstrap'

function NavigationLinks() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid={true}>
               
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                <Navbar.Brand className="d-block">Portfolio v1.0</Navbar.Brand>
                    <Nav className="me-auto ">
                        <Nav.Link className="lead"><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link className="lead"><Link to="/projects">Projects</Link></Nav.Link>
                        <Nav.Link className="lead"><Link to="/about">About Me</Link></Nav.Link>
                        <Nav.Link className="lead"><Link to="/contact">Contact</Link></Nav.Link>
                    </Nav>
                   
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationLinks