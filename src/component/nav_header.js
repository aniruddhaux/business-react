import React, {Component, useState} from 'react';

import { BrowserRouter, Route, Link } from "react-router-dom";
import { Button } from 'reactstrap';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

  const NavMenu = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return(
        <div className="nav_header border-top border-white">
            <div className="container-fluid">
                <Nav className="justify-content-center">
                    <NavItem>
                        <NavLink className="text-white active" href="#">HOME</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white" href="#">OUR FEATURES</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white" href="#">ABOUT US</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white" href="#">OUR SERVICES</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white" href="#">TESTIMONIALS</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="text-white" href="#">Contacts Us</NavLink>
                    </NavItem>
                </Nav>
            </div>
        </div>
    );

}
export default  NavMenu;