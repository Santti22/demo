import React from "react";
import {Nav, NavLink, NavMenu, Bars} from "./NavElements";
import logo from "../img/logo.png"
import { useLanguage } from "./LanguageContext";

const NavBar = () => {

    const {language} = useLanguage();

    return (
        <div>
            <Nav>
                <NavLink to="/">
                    <img src={logo} alt="logo" />
                </NavLink>
                <NavMenu>
                    <NavLink to="/company" activeStyle>
                        {language === 'en' ? "Company" : "Yritys"}
                    </NavLink>
                    <NavLink to="/products" activeStyle>
                        {language === 'en' ? "Products" : "Tuotteet"}
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        {language === 'en' ? "Contact us" : "Ota yhteyttä"}
                    </NavLink>
                    <div className="search-container">
                        <input type="text" placeholder={language === 'en' ? 'Search' : 'Hae'} />
                        <button type="submit">{language === 'en' ? 'Search' : 'Haku'}</button>
                    </div>
                </NavMenu>
                <Bars>
                    <NavLink to="/company" activeStyle>
                        {language === 'en' ? "Company" : "Yritys"}
                    </NavLink>
                    <NavLink to="/products" activeStyle>
                        {language === 'en' ? "Products" : "Tuotteet"}
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        {language === 'en' ? "Contact us" : "Ota yhteyttä"}
                    </NavLink>
                    <div className="search-container">
                        <input type="text" placeholder={language === 'en' ? 'Search' : 'Hae'} />
                        <button type="submit">{language === 'en' ? 'Search' : 'Haku'}</button>
                    </div>
                </Bars>
            </Nav>
        </div>
    );
};

export default NavBar;