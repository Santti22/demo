import React from "react";
import {Nav, NavLink, NavMenu} from "./NavElements";
import logo from "../img/logo.png"

const NavBar = () => {
    return (
        <div>
            <Nav>
                <NavMenu>
                    <NavLink to="/">
                        <img src={logo} alt="logo"/>
                    </NavLink>
                    <NavLink to="/company" activeStyle>
                        Company
                    </NavLink>
                    <NavLink to="/products" activeStyle>
                        Products
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact Us
                    </NavLink>
                </NavMenu>
            </Nav>
        </div>
    );
};

export default NavBar;