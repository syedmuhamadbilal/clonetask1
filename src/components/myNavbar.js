import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Logo from "../images/logo.png"

const Mynavbar = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <div>
            <Navbar color="faded bg-dark" dark>
                <Link to="/">
                    <NavbarBrand href="/" className="mr-auto"><img src={Logo} alt="" className="d-inline-block align-middle mr-2" width="60" /></NavbarBrand>
                </Link>
                <NavbarToggler onClick={toggleNavbar} className="mr-2 " />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Mynavbar
