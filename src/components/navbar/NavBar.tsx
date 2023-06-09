import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import classes from './NavBar.module.scss';

function NavBar() {
    return (
        <Navbar expand="lg" >
            <Container className={classes.container}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={`me-auto ${classes.navbarNav}`} >
                        <Nav.Link className={classes.navLink} href="/home">Home</Nav.Link>
                        <Nav.Link className={classes.navLink} href="/cart">Cart</Nav.Link>
                        <Nav.Link className={classes.navLink} href="/checkout">Checkout</Nav.Link>
                        <Nav.Link className={classes.navLink} href="/myaccount">My Account</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default NavBar