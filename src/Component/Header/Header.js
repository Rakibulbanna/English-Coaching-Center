import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Dropdown, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import useFirebase from '../../hooks/useFirebase';
import { StickyNav } from 'react-js-stickynav'

const Header = () => {

    const { user, handleSignOut } = useFirebase();

    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
    const style = () => {
        return (
          <style jsx>{`
            .nav {
            
              position: fixed;
              z-index: 2000;
              width: 100%;
            }
           
            
          `}</style>
        )
      }
   
      const divStyle = {
        
        width: "100%",
        position: "fixed",
        zIndex: "2000",
    };
      

    return (
        
             
             <div style={divStyle} >
                
            <Navbar className="menu-link w-100 p-3 m-15 fixed-navbar b" collapseOnSelect expand="lg" id="navbar" >
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

                        {(user.email && user.displayName) ? 
                        <span>
                            <Link exact to="/login" className="navbar-brand text-white last-link-sp" onClick={handleSignOut}>Log out <i className="fas fa-sign-in-alt"></i></Link>

                            <Link exact to="/profile" className="navbar-brand text-white last-link-sp">{user.displayName} <img className='profile-img'
                             src={user.photoURL} alt=''/></Link>
                             </span>
                            
                            
                            
                             
                            : 
                           <Link exact to="/login"  className="navbar-brand text-white last-link-sp header-btn">
                                login 
                            <i className="fas fa-user-plus"></i></Link>}

                            
                             
                    </Nav>


                </Navbar.Collapse>
                {/* </Container> */}
            </Navbar>
            </div>
        
    );
};

export default Header;