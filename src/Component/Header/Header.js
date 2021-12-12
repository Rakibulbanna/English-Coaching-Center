import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
    return (
        <div >
            <Navbar className="menu-link w-100 p-3 m-10" collapseOnSelect expand="lg" id="navbar" >
                {/* <Container className="b"> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto">

                        <NavLink to="/" className="navbar-brand text-white logo-sp"><h4>Education center system</h4></NavLink>
                        <NavLink exact to="/home" className="navbar-brand text-white link-sp ">Home</NavLink>
                        <NavLink exact to="/about" className="navbar-brand text-white link-sp ">About</NavLink>
                        <NavLink exact to="/course" className="navbar-brand text-white link-sp ">Course</NavLink>

                        <NavDropdown title={
                            <span className="navbar-brand text-white">Reserch</span>
                        } renderMenuOnMount={true}>
                            <Dropdown.Menu show={showDropdown}>
                                <div className="menu-link">
                                    <Dropdown.Item >
                                        <NavLink exact to="/upcommingreserch" className=" navbar-brand">upcomming reserch</NavLink>
                                    </Dropdown.Item >
                                    <Dropdown.Item >
                                        <NavLink exact to="/ongoingreserch" className="  navbar-brand">ongoing reserch</NavLink>
                                    </Dropdown.Item>
                                    <Dropdown.Item >
                                        <NavLink exact to="/publishedreserch" className="  navbar-brand">published reserch</NavLink>
                                    </Dropdown.Item>
                                </div>

                            </Dropdown.Menu>
                        </NavDropdown>


                        <NavLink exact to="/mentor" className="navbar-brand text-white link-sp ">Mentor</NavLink>
                        <NavLink exact to="/accountcreation" className="navbar-brand text-white link-sp ">Apply membership</NavLink>
                        <NavLink exact to="/login" className="navbar-brand text-white link-sp ">login</NavLink>

                    </Nav>


                </Navbar.Collapse>
                {/* </Container> */}
            </Navbar>
        </div>
    );
};

export default Header;