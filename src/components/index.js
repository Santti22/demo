import React from "react";
import {Nav, NavLink, NavMenu, Bars} from "./NavElements";
import logo from "../img/logo.png"

const NavBar = () => {
    return (
        <div>
            <Nav>
                <NavLink to="/">
                    <img src={logo} alt="logo" />
                </NavLink>
                <NavMenu>
                    <NavLink to="/company" activeStyle>
                        Company
                    </NavLink>
                    <NavLink to="/products" activeStyle>
                        Products
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact Us
                    </NavLink>
                    <div className="search-container">
                        <input type="text" placeholder="Search" />
                        <button type="submit">Search</button>
                    </div>
                </NavMenu>
                <Bars>
                    <NavLink to="/company" activeStyle>
                        Company
                    </NavLink>
                    <NavLink to="/products" activeStyle>
                        Products
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact Us
                    </NavLink>
                    <div className="search-container">
                        <input type="text" placeholder="Search" />
                        <button type="submit">Search</button>
                    </div>
                </Bars>
            </Nav>
        </div>
    );
};

export default NavBar;