import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {

    const {user,handleSignOut}=useFirebase();

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

                        <Link to="/" className="navbar-brand text-white logo-sp"><h4>Education center system</h4></Link>
                        <Link exact to="/home" className="navbar-brand text-white link-sp ">Home</Link>
                        <Link exact to="/about" className="navbar-brand text-white link-sp ">About</Link>
                        <Link exact to="/course" className="navbar-brand text-white link-sp ">Course</Link>


                        <NavDropdown title={
                            <span className="navbar-brand text-white">Reserch</span>
                        } renderMenuOnMount={true}>
                            <Dropdown.Menu show={showDropdown}>
                                <div className="menu-link">
                                    <Dropdown.Item >
                                        <Link exact to="/upcommingreserch" className=" navbar-brand">upcomming reserch</Link>
                                    </Dropdown.Item >
                                    <Dropdown.Item >
                                        <Link exact to="/ongoingreserch" className="  navbar-brand">ongoing reserch</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item >
                                        <Link exact to="/publishedreserch" className="  navbar-brand">published reserch</Link>
                                    </Dropdown.Item>
                                </div>

                            </Dropdown.Menu>
                        </NavDropdown>


                        <Link exact to="/mentor" className="navbar-brand text-white link-sp ">Mentor</Link>
                        {/* <Link exact to="/accountcreation" className="navbar-brand text-white link-sp ">Apply membership</Link> */}
                        
                        {(user.email && user.displayName) ? <span>
                        <Link exact to="/login" className="navbar-brand text-white link-sp" onClick={handleSignOut}>Log out</Link>
                        <Link exact to="/profile" className="navbar-brand text-white link-sp ">profile</Link></span>
                        : <Link exact to="/login" className="navbar-brand text-white link-sp ">login</Link>}
                    </Nav>


                </Navbar.Collapse>
                {/* </Container> */}
            </Navbar>
        </div>
    );
};

export default Header;