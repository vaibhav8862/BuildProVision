import React from "react";
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function Navbars() {
    return (
        <div>
            <Navbar expand="lg" className="bg-dark" variant="dark">
                <Container fluid>
                    <Link className="navbar-brand" to="/">
                        <img src="logo.png" width="180" height="50" className="d-inline-block align-top" alt="Logo" />
                    </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                            <Link className="nav-link ml-5" to="/">Home<span className="sr-only">(current)</span></Link>

                            </li>
                            <li className="nav-item ml-5">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item ml-5">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item ml-5">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item ml-5">
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>
                        </ul>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbars;
